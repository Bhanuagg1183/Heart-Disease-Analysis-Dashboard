import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const HeartDiseaseAnalysis = () => {
  const [data, setData] = useState([]);
  const [insights, setInsights] = useState({});

  // Sample heart disease dataset
  const sampleData = [
    {age: 63, sex: 1, chestPainType: 3, restingBP: 145, cholesterol: 233, fastingBS: 1, restingECG: 0, maxHeartRate: 150, exerciseAngina: 0, oldpeak: 2.3, stSlope: 0, target: 1},
    {age: 37, sex: 1, chestPainType: 2, restingBP: 130, cholesterol: 250, fastingBS: 0, restingECG: 1, maxHeartRate: 187, exerciseAngina: 0, oldpeak: 3.5, stSlope: 0, target: 1},
    {age: 41, sex: 0, chestPainType: 1, restingBP: 130, cholesterol: 204, fastingBS: 0, restingECG: 0, maxHeartRate: 172, exerciseAngina: 0, oldpeak: 1.4, stSlope: 2, target: 1},
    {age: 56, sex: 1, chestPainType: 1, restingBP: 120, cholesterol: 236, fastingBS: 0, restingECG: 1, maxHeartRate: 178, exerciseAngina: 0, oldpeak: 0.8, stSlope: 2, target: 1},
    {age: 57, sex: 0, chestPainType: 0, restingBP: 120, cholesterol: 354, fastingBS: 0, restingECG: 1, maxHeartRate: 163, exerciseAngina: 1, oldpeak: 0.6, stSlope: 2, target: 1},
    {age: 57, sex: 1, chestPainType: 0, restingBP: 140, cholesterol: 192, fastingBS: 0, restingECG: 1, maxHeartRate: 148, exerciseAngina: 0, oldpeak: 0.4, stSlope: 1, target: 1},
    {age: 56, sex: 0, chestPainType: 1, restingBP: 140, cholesterol: 294, fastingBS: 0, restingECG: 0, maxHeartRate: 153, exerciseAngina: 0, oldpeak: 1.3, stSlope: 1, target: 1},
    {age: 44, sex: 1, chestPainType: 1, restingBP: 120, cholesterol: 263, fastingBS: 0, restingECG: 1, maxHeartRate: 173, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 52, sex: 1, chestPainType: 2, restingBP: 172, cholesterol: 199, fastingBS: 1, restingECG: 1, maxHeartRate: 162, exerciseAngina: 0, oldpeak: 0.5, stSlope: 2, target: 1},
    {age: 57, sex: 1, chestPainType: 2, restingBP: 150, cholesterol: 168, fastingBS: 0, restingECG: 1, maxHeartRate: 174, exerciseAngina: 0, oldpeak: 1.6, stSlope: 2, target: 1},
    {age: 54, sex: 1, chestPainType: 0, restingBP: 140, cholesterol: 239, fastingBS: 0, restingECG: 1, maxHeartRate: 160, exerciseAngina: 0, oldpeak: 1.2, stSlope: 2, target: 1},
    {age: 48, sex: 0, chestPainType: 2, restingBP: 130, cholesterol: 275, fastingBS: 0, restingECG: 1, maxHeartRate: 139, exerciseAngina: 0, oldpeak: 0.2, stSlope: 2, target: 1},
    {age: 49, sex: 1, chestPainType: 1, restingBP: 130, cholesterol: 266, fastingBS: 0, restingECG: 1, maxHeartRate: 171, exerciseAngina: 0, oldpeak: 0.6, stSlope: 2, target: 1},
    {age: 64, sex: 1, chestPainType: 3, restingBP: 110, cholesterol: 211, fastingBS: 0, restingECG: 0, maxHeartRate: 144, exerciseAngina: 1, oldpeak: 1.8, stSlope: 1, target: 1},
    {age: 58, sex: 0, chestPainType: 3, restingBP: 150, cholesterol: 283, fastingBS: 1, restingECG: 0, maxHeartRate: 162, exerciseAngina: 0, oldpeak: 1, stSlope: 2, target: 1},
    {age: 50, sex: 0, chestPainType: 2, restingBP: 120, cholesterol: 219, fastingBS: 0, restingECG: 1, maxHeartRate: 158, exerciseAngina: 0, oldpeak: 1.6, stSlope: 1, target: 1},
    {age: 58, sex: 0, chestPainType: 2, restingBP: 120, cholesterol: 340, fastingBS: 0, restingECG: 1, maxHeartRate: 172, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 66, sex: 0, chestPainType: 3, restingBP: 150, cholesterol: 226, fastingBS: 0, restingECG: 1, maxHeartRate: 114, exerciseAngina: 0, oldpeak: 2.6, stSlope: 0, target: 1},
    {age: 43, sex: 1, chestPainType: 0, restingBP: 150, cholesterol: 247, fastingBS: 0, restingECG: 1, maxHeartRate: 171, exerciseAngina: 0, oldpeak: 1.5, stSlope: 2, target: 1},
    {age: 69, sex: 0, chestPainType: 3, restingBP: 140, cholesterol: 239, fastingBS: 0, restingECG: 1, maxHeartRate: 151, exerciseAngina: 0, oldpeak: 1.8, stSlope: 2, target: 1},
    {age: 59, sex: 1, chestPainType: 0, restingBP: 135, cholesterol: 234, fastingBS: 0, restingECG: 1, maxHeartRate: 161, exerciseAngina: 0, oldpeak: 0.5, stSlope: 1, target: 1},
    {age: 44, sex: 1, chestPainType: 2, restingBP: 130, cholesterol: 233, fastingBS: 0, restingECG: 1, maxHeartRate: 179, exerciseAngina: 1, oldpeak: 0.4, stSlope: 2, target: 1},
    {age: 42, sex: 1, chestPainType: 0, restingBP: 140, cholesterol: 226, fastingBS: 0, restingECG: 1, maxHeartRate: 178, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 61, sex: 1, chestPainType: 2, restingBP: 150, cholesterol: 243, fastingBS: 1, restingECG: 1, maxHeartRate: 137, exerciseAngina: 1, oldpeak: 1, stSlope: 1, target: 1},
    {age: 40, sex: 1, chestPainType: 3, restingBP: 140, cholesterol: 199, fastingBS: 0, restingECG: 1, maxHeartRate: 178, exerciseAngina: 1, oldpeak: 1.4, stSlope: 2, target: 1},
    {age: 71, sex: 0, chestPainType: 1, restingBP: 160, cholesterol: 302, fastingBS: 0, restingECG: 1, maxHeartRate: 162, exerciseAngina: 0, oldpeak: 0.4, stSlope: 2, target: 1},
    {age: 59, sex: 1, chestPainType: 2, restingBP: 150, cholesterol: 212, fastingBS: 1, restingECG: 1, maxHeartRate: 157, exerciseAngina: 0, oldpeak: 1.6, stSlope: 2, target: 1},
    {age: 51, sex: 1, chestPainType: 2, restingBP: 110, cholesterol: 175, fastingBS: 0, restingECG: 1, maxHeartRate: 123, exerciseAngina: 0, oldpeak: 0.6, stSlope: 2, target: 1},
    {age: 65, sex: 0, chestPainType: 2, restingBP: 140, cholesterol: 417, fastingBS: 1, restingECG: 0, maxHeartRate: 157, exerciseAngina: 0, oldpeak: 0.8, stSlope: 1, target: 1},
    {age: 53, sex: 1, chestPainType: 2, restingBP: 130, cholesterol: 197, fastingBS: 1, restingECG: 0, maxHeartRate: 152, exerciseAngina: 0, oldpeak: 1.2, stSlope: 0, target: 1},
    {age: 41, sex: 0, chestPainType: 1, restingBP: 105, cholesterol: 198, fastingBS: 0, restingECG: 1, maxHeartRate: 168, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 65, sex: 1, chestPainType: 0, restingBP: 120, cholesterol: 177, fastingBS: 0, restingECG: 1, maxHeartRate: 140, exerciseAngina: 0, oldpeak: 0.4, stSlope: 2, target: 1},
    {age: 44, sex: 1, chestPainType: 1, restingBP: 112, cholesterol: 290, fastingBS: 0, restingECG: 0, maxHeartRate: 153, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 44, sex: 1, chestPainType: 1, restingBP: 130, cholesterol: 219, fastingBS: 0, restingECG: 0, maxHeartRate: 188, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 60, sex: 1, chestPainType: 0, restingBP: 130, cholesterol: 253, fastingBS: 0, restingECG: 1, maxHeartRate: 144, exerciseAngina: 1, oldpeak: 1.4, stSlope: 2, target: 1},
    {age: 54, sex: 1, chestPainType: 0, restingBP: 124, cholesterol: 266, fastingBS: 0, restingECG: 0, maxHeartRate: 109, exerciseAngina: 1, oldpeak: 2.2, stSlope: 1, target: 1},
    {age: 50, sex: 1, chestPainType: 2, restingBP: 140, cholesterol: 233, fastingBS: 0, restingECG: 1, maxHeartRate: 163, exerciseAngina: 0, oldpeak: 0.6, stSlope: 1, target: 1},
    {age: 41, sex: 1, chestPainType: 0, restingBP: 110, cholesterol: 172, fastingBS: 0, restingECG: 0, maxHeartRate: 158, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 51, sex: 0, chestPainType: 0, restingBP: 130, cholesterol: 305, fastingBS: 0, restingECG: 1, maxHeartRate: 142, exerciseAngina: 1, oldpeak: 1.2, stSlope: 1, target: 1},
    {age: 58, sex: 1, chestPainType: 2, restingBP: 128, cholesterol: 216, fastingBS: 0, restingECG: 0, maxHeartRate: 131, exerciseAngina: 1, oldpeak: 2.2, stSlope: 1, target: 1},
    {age: 54, sex: 0, chestPainType: 2, restingBP: 135, cholesterol: 304, fastingBS: 1, restingECG: 1, maxHeartRate: 170, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 60, sex: 1, chestPainType: 0, restingBP: 120, cholesterol: 178, fastingBS: 1, restingECG: 1, maxHeartRate: 96, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    {age: 47, sex: 1, chestPainType: 2, restingBP: 110, cholesterol: 275, fastingBS: 0, restingECG: 0, maxHeartRate: 118, exerciseAngina: 1, oldpeak: 1, stSlope: 1, target: 1},
    {age: 50, sex: 0, chestPainType: 0, restingBP: 110, cholesterol: 254, fastingBS: 0, restingECG: 0, maxHeartRate: 159, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 1},
    // Negative cases (no heart disease)
    {age: 54, sex: 1, chestPainType: 2, restingBP: 108, cholesterol: 267, fastingBS: 0, restingECG: 0, maxHeartRate: 167, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 0},
    {age: 39, sex: 1, chestPainType: 2, restingBP: 118, cholesterol: 219, fastingBS: 0, restingECG: 1, maxHeartRate: 140, exerciseAngina: 0, oldpeak: 1.2, stSlope: 1, target: 0},
    {age: 46, sex: 1, chestPainType: 2, restingBP: 120, cholesterol: 249, fastingBS: 0, restingECG: 0, maxHeartRate: 144, exerciseAngina: 0, oldpeak: 0.8, stSlope: 2, target: 0},
    {age: 54, sex: 1, chestPainType: 2, restingBP: 122, cholesterol: 286, fastingBS: 0, restingECG: 0, maxHeartRate: 116, exerciseAngina: 1, oldpeak: 3.2, stSlope: 1, target: 0},
    {age: 35, sex: 1, chestPainType: 0, restingBP: 126, cholesterol: 282, fastingBS: 0, restingECG: 0, maxHeartRate: 156, exerciseAngina: 1, oldpeak: 0, stSlope: 2, target: 0},
    {age: 51, sex: 1, chestPainType: 2, restingBP: 94, cholesterol: 227, fastingBS: 0, restingECG: 1, maxHeartRate: 154, exerciseAngina: 1, oldpeak: 0, stSlope: 2, target: 0},
    {age: 53, sex: 1, chestPainType: 2, restingBP: 142, cholesterol: 226, fastingBS: 0, restingECG: 0, maxHeartRate: 111, exerciseAngina: 1, oldpeak: 0, stSlope: 2, target: 0},
    {age: 38, sex: 1, chestPainType: 2, restingBP: 138, cholesterol: 175, fastingBS: 0, restingECG: 1, maxHeartRate: 173, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 0},
    {age: 59, sex: 1, chestPainType: 0, restingBP: 178, cholesterol: 270, fastingBS: 0, restingECG: 0, maxHeartRate: 145, exerciseAngina: 0, oldpeak: 4.2, stSlope: 0, target: 0},
    {age: 51, sex: 1, chestPainType: 2, restingBP: 125, cholesterol: 213, fastingBS: 0, restingECG: 0, maxHeartRate: 125, exerciseAngina: 1, oldpeak: 1.4, stSlope: 2, target: 0},
    {age: 58, sex: 1, chestPainType: 2, restingBP: 146, cholesterol: 218, fastingBS: 0, restingECG: 1, maxHeartRate: 105, exerciseAngina: 0, oldpeak: 2, stSlope: 1, target: 0},
    {age: 57, sex: 1, chestPainType: 2, restingBP: 124, cholesterol: 261, fastingBS: 0, restingECG: 1, maxHeartRate: 141, exerciseAngina: 0, oldpeak: 0.3, stSlope: 2, target: 0},
    {age: 58, sex: 0, chestPainType: 1, restingBP: 136, cholesterol: 319, fastingBS: 1, restingECG: 0, maxHeartRate: 152, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 0},
    {age: 35, sex: 0, chestPainType: 0, restingBP: 138, cholesterol: 183, fastingBS: 0, restingECG: 1, maxHeartRate: 182, exerciseAngina: 0, oldpeak: 1.4, stSlope: 2, target: 0},
    {age: 51, sex: 1, chestPainType: 2, restingBP: 100, cholesterol: 222, fastingBS: 0, restingECG: 1, maxHeartRate: 143, exerciseAngina: 1, oldpeak: 1.2, stSlope: 1, target: 0},
    {age: 45, sex: 0, chestPainType: 1, restingBP: 130, cholesterol: 234, fastingBS: 0, restingECG: 0, maxHeartRate: 175, exerciseAngina: 0, oldpeak: 0.6, stSlope: 1, target: 0},
    {age: 44, sex: 1, chestPainType: 0, restingBP: 120, cholesterol: 220, fastingBS: 0, restingECG: 1, maxHeartRate: 170, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 0},
    {age: 62, sex: 0, chestPainType: 0, restingBP: 124, cholesterol: 209, fastingBS: 0, restingECG: 1, maxHeartRate: 163, exerciseAngina: 0, oldpeak: 0, stSlope: 2, target: 0},
    {age: 54, sex: 1, chestPainType: 2, restingBP: 120, cholesterol: 258, fastingBS: 0, restingECG: 0, maxHeartRate: 147, exerciseAngina: 0, oldpeak: 0.4, stSlope: 1, target: 0},
    {age: 51, sex: 1, chestPainType: 2, restingBP: 94, cholesterol: 227, fastingBS: 0, restingECG: 1, maxHeartRate: 154, exerciseAngina: 1, oldpeak: 0, stSlope: 2, target: 0}
  ];

  useEffect(() => {
    setData(sampleData);
    calculateInsights(sampleData);
  }, []);

  const calculateInsights = (dataset) => {
    if (!dataset || dataset.length === 0) return;

    const totalRecords = dataset.length;
    const heartDiseaseCount = dataset.filter(row => row.target === 1).length;
    const avgAge = dataset.reduce((sum, row) => sum + row.age, 0) / totalRecords;
    const maleCount = dataset.filter(row => row.sex === 1).length;
    const avgCholesterol = dataset.filter(row => row.cholesterol > 0).reduce((sum, row) => sum + row.cholesterol, 0) / dataset.filter(row => row.cholesterol > 0).length;
    const avgMaxHR = dataset.reduce((sum, row) => sum + row.maxHeartRate, 0) / totalRecords;

    // Age distribution
    const ageGroups = {
      '20-30': 0, '31-40': 0, '41-50': 0, '51-60': 0, '61-70': 0, '71-80': 0
    };
    dataset.forEach(row => {
      if (row.age <= 30) ageGroups['20-30']++;
      else if (row.age <= 40) ageGroups['31-40']++;
      else if (row.age <= 50) ageGroups['41-50']++;
      else if (row.age <= 60) ageGroups['51-60']++;
      else if (row.age <= 70) ageGroups['61-70']++;
      else ageGroups['71-80']++;
    });

    // Chest pain types
    const chestPainTypes = {};
    dataset.forEach(row => {
      const type = row.chestPainType;
      chestPainTypes[type] = (chestPainTypes[type] || 0) + 1;
    });

    setInsights({
      totalRecords,
      heartDiseaseCount,
      heartDiseaseRate: ((heartDiseaseCount / totalRecords) * 100).toFixed(1),
      avgAge: avgAge.toFixed(1),
      maleCount,
      malePercentage: ((maleCount / totalRecords) * 100).toFixed(1),
      avgCholesterol: avgCholesterol.toFixed(1),
      avgMaxHR: avgMaxHR.toFixed(1),
      ageGroups,
      chestPainTypes
    });
  };

  const ageGroupData = Object.entries(insights.ageGroups || {}).map(([group, count]) => ({
    group,
    count
  }));

  const genderData = [
    { name: 'Male', value: insights.maleCount || 0 },
    { name: 'Female', value: (insights.totalRecords || 0) - (insights.maleCount || 0) }
  ];

  const targetData = [
    { name: 'No Heart Disease', value: (insights.totalRecords || 0) - (insights.heartDiseaseCount || 0) },
    { name: 'Heart Disease', value: insights.heartDiseaseCount || 0 }
  ];

  const chestPainData = Object.entries(insights.chestPainTypes || {}).map(([type, count]) => ({
    type: `Type ${type}`,
    count
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  if (!data.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-center">Loading heart disease data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Heart Disease Dataset Analysis</h1>
          <p className="text-xl text-gray-600">Comprehensive analysis of cardiovascular health indicators</p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Total Records</h3>
                <p className="text-3xl font-bold text-blue-600">{insights.totalRecords}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Heart Disease Rate</h3>
                <p className="text-3xl font-bold text-red-600">{insights.heartDiseaseRate}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Average Age</h3>
                <p className="text-3xl font-bold text-green-600">{insights.avgAge} years</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Male Percentage</h3>
                <p className="text-3xl font-bold text-purple-600">{insights.malePercentage}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Age Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Age Distribution</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={ageGroupData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="group" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gender Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Gender Distribution</h3>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Heart Disease Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Heart Disease Distribution</h3>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={targetData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  {targetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#ef4444'} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Chest Pain Types */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Chest Pain Types</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={chestPainData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="type" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar dataKey="count" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">Key Clinical Insights</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-700 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Demographics
              </h4>
              <div className="space-y-3 text-gray-600 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Dataset contains <strong className="text-gray-800">{insights.totalRecords}</strong> patient records</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span><strong className="text-gray-800">{insights.malePercentage}%</strong> are male patients</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Average patient age is <strong className="text-gray-800">{insights.avgAge}</strong> years</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Most patients are in the <strong className="text-gray-800">51-60</strong> age group</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-700 flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Clinical Indicators
              </h4>
              <div className="space-y-3 text-gray-600 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span><strong className="text-gray-800">{insights.heartDiseaseRate}%</strong> have heart disease</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Average cholesterol: <strong className="text-gray-800">{insights.avgCholesterol}</strong> mg/dl</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Average max heart rate: <strong className="text-gray-800">{insights.avgMaxHR}</strong> bpm</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Multiple <strong className="text-gray-800">chest pain types</strong> represented</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>Heart Disease Analysis Dashboard - Powered by Advanced Data Visualization</p>
        </div>
      </div>
    </div>
  );
};

export default HeartDiseaseAnalysis;