'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Image as ImageIcon, X, ScanSearch, Sparkles } from 'lucide-react';
import { analyzeFood } from '@/lib/mockImageAnalysis';
import type { FoodAnalysisResult } from '@/lib/types';
import styles from './FoodAnalyzer.module.css';

export default function FoodAnalyzer() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<FoodAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback((file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
    setResult(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) handleFile(file);
    },
    [handleFile]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const analyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult(analyzeFood(fileName || ''));
      setIsAnalyzing(false);
    }, 1500);
  };

  const clear = () => {
    setFileName(null);
    setPreview(null);
    setResult(null);
  };

  const getScoreColor = (score: number, inverse: boolean = false) => {
    const val = inverse ? 100 - score : score;
    if (val >= 70) return 'var(--risk-low)';
    if (val >= 40) return 'var(--risk-moderate)';
    return 'var(--risk-critical)';
  };

  return (
    <div className={styles.container}>
      {/* Upload Zone */}
      <div
        className={`${styles.dropzone} ${dragOver ? styles.dragOver : ''} ${preview ? styles.hasFile : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        {!preview ? (
          <label className={styles.uploadLabel}>
            <div className={styles.uploadIcon}>
              <Upload size={32} />
            </div>
            <span className={styles.uploadTitle}>Drop your food image here</span>
            <span className={styles.uploadSub}>or click to browse (JPG, PNG, WebP)</span>
            <input
              type="file"
              accept="image/*"
              className={styles.fileInput}
              onChange={handleInputChange}
            />
          </label>
        ) : (
          <div className={styles.previewArea}>
            <button className={styles.clearBtn} onClick={clear}>
              <X size={18} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Food preview" className={styles.previewImg} />
            <div className={styles.previewInfo}>
              <ImageIcon size={14} />
              <span>{fileName}</span>
            </div>
            {!result && !isAnalyzing && (
              <motion.button
                className={styles.analyzeBtn}
                onClick={analyze}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ScanSearch size={18} />
                Analyze with Gemini AI
              </motion.button>
            )}
            {isAnalyzing && (
              <div className={styles.analyzing}>
                <div className={styles.spinner} />
                <span>Gemini AI analyzing food composition...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            className={styles.results}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.resultHeader}>
              <h3 className={styles.resultTitle}>{result.name}</h3>
              <div className="gemini-badge">
                <Sparkles size={12} />
                Gemini Analysis
              </div>
            </div>

            <div className={styles.metricsGrid}>
              {[
                { label: 'Oil Density', value: result.oilDensity, inverse: true },
                { label: 'Sugar Load', value: result.sugarLoad, inverse: true },
                { label: 'Heaviness', value: result.heavinessScore, inverse: true },
                { label: 'Health Score', value: result.healthScore, inverse: false },
              ].map((m) => (
                <div key={m.label} className={styles.metricCard}>
                  <div className={styles.metricLabel}>{m.label}</div>
                  <div
                    className={styles.metricValue}
                    style={{ color: getScoreColor(m.value, m.inverse) }}
                  >
                    {m.value}
                    <span className={styles.metricUnit}>/100</span>
                  </div>
                  <div className={styles.metricBar}>
                    <motion.div
                      className={styles.metricFill}
                      style={{ background: getScoreColor(m.value, m.inverse) }}
                      initial={{ width: 0 }}
                      animate={{ width: `${m.value}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.calories}>
              Estimated: <strong>{result.calories} kcal</strong>
            </div>

            <div className={styles.substitutes}>
              <h4 className={styles.subsTitle}>🌿 Healthier Alternatives</h4>
              {result.substitutes.map((sub) => (
                <div key={sub.name} className={styles.subCard}>
                  <div className={styles.subInfo}>
                    <span className={styles.subName}>{sub.name}</span>
                    <span className={styles.subReason}>{sub.reason}</span>
                  </div>
                  <div className={styles.subScore} style={{ color: 'var(--risk-low)' }}>
                    {sub.healthScore}
                    <span className={styles.subScoreUnit}>/100</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
