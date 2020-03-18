import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, View } from 'bizcharts';
import { Spin } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { getTodayZeroStamp, showCorsHelper } from '../../utils';

const START_TIME = 1546272000000;

const STATIC_DATA = [
  //huobi-okex
  {date: '2018-04-13', price: 8126.68, pricef: 8222.19, change: 0},
  {date: '2018-04-14', price: 7958.86, pricef: 7994.26, change: 0},
  {date: '2018-04-15', price: 8269.23, pricef: 8323.20, change: 0},
  {date: '2018-04-16', price: 7970.00, pricef: 7971.00, change: 0},
  {date: '2018-04-17', price: 8082.00, pricef: 8053.75, change: 0},
  {date: '2018-04-18', price: 7993.11, pricef: 7943.25, change: 0},
  {date: '2018-04-19', price: 8229.85, pricef: 8195.70, change: 0},
  {date: '2018-04-20', price: 8471.55, pricef: 8488.38, change: 0},
  {date: '2018-04-21', price: 8830.95, pricef: 8823.83, change: 0},
  {date: '2018-04-22', price: 8947.99, pricef: 8946.75, change: 0},
  {date: '2018-04-23', price: 8900.74, pricef: 8886.00, change: 0},
  {date: '2018-04-24', price: 9347.15, pricef: 9339.90, change: 0},
  {date: '2018-04-25', price: 8962.87, pricef: 8944.52, change: 0},
  {date: '2018-04-26', price: 8810.80, pricef: 8775.25, change: 0},
  {date: '2018-04-27', price: 9245.29, pricef: 9223.22, change: 0},
  {date: '2018-04-28', price: 9357.08, pricef: 9370.00, change: 0},
  {date: '2018-04-29', price: 9329.48, pricef: 9366.17, change: 0},
  {date: '2018-04-30', price: 9313.72, pricef: 9362.29, change: 0},
  {date: '2018-05-01', price: 8925.98, pricef: 8949.46, change: 0},
  {date: '2018-05-02', price: 9160.65, pricef: 9168.22, change: 0},
  {date: '2018-05-03', price: 9437.99, pricef: 9490.18, change: 0},
  {date: '2018-05-04', price: 9628.61, pricef: 9832.00, change: 0},
  {date: '2018-05-05', price: 9932.43, pricef: 10248.76, change: 0},
  {date: '2018-05-06', price: 9511.50, pricef: 9788.24, change: 0},
  {date: '2018-05-07', price: 9359.26, pricef: 9649.99, change: 0},
  {date: '2018-05-08', price: 9201.97, pricef: 9300.00, change: 0},
  {date: '2018-05-09', price: 9285.92, pricef: 9490.92, change: 0},
  {date: '2018-05-10', price: 9361.01, pricef: 9529.68, change: 0},
  {date: '2018-05-11', price: 8572.42, pricef: 8739.32, change: 0},
  {date: '2018-05-12', price: 8322.86, pricef: 8527.09, change: 0},
  {date: '2018-05-13', price: 8619.01, pricef: 8706.16, change: 0},
  {date: '2018-05-14', price: 8777.57, pricef: 8919.00, change: 0},
  {date: '2018-05-15', price: 8519.56, pricef: 8553.03, change: 0},
  {date: '2018-05-16', price: 8273.35, pricef: 8365.08, change: 0},
  {date: '2018-05-17', price: 8307.00, pricef: 8450.66, change: 0},
  {date: '2018-05-18', price: 8116.05, pricef: 8288.70, change: 0},
  {date: '2018-05-19', price: 8307.00, pricef: 8478.00, change: 0},
  {date: '2018-05-20', price: 8391.99, pricef: 8553.31, change: 0},
  {date: '2018-05-21', price: 8400.22, pricef: 8542.39, change: 0},
  {date: '2018-05-22', price: 8230.71, pricef: 8386.20, change: 0},
  {date: '2018-05-23', price: 7694.54, pricef: 7831.95, change: 0},
  {date: '2018-05-24', price: 7566.06, pricef: 7600.31, change: 0},
  {date: '2018-05-25', price: 7502.94, pricef: 7557.29, change: 0},
  {date: '2018-05-26', price: 7535.57, pricef: 7564.40, change: 0},
  {date: '2018-05-27', price: 7346.68, pricef: 7392.93, change: 0},
  {date: '2018-05-28', price: 7233.30, pricef: 7348.80, change: 0},
  {date: '2018-05-29', price: 7429.87, pricef: 7503.27, change: 0},
  {date: '2018-05-30', price: 7334.57, pricef: 7376.41, change: 0},
  {date: '2018-05-31', price: 7554.96, pricef: 7576.19, change: 0},
  {date: '2018-06-01', price: 7446.15, pricef: 7470.42, change: 0},
  {date: '2018-06-02', price: 7616.17, pricef: 7706.36, change: 0},
  {date: '2018-06-03', price: 7730.41, pricef: 7803.16, change: 0},
  {date: '2018-06-04', price: 7502.09, pricef: 7550.00, change: 0},
  {date: '2018-06-05', price: 7567.00, pricef: 7639.64, change: 0},
  {date: '2018-06-06', price: 7653.95, pricef: 7747.89, change: 0},
  {date: '2018-06-07', price: 7687.35, pricef: 7798.49, change: 0},
  {date: '2018-06-08', price: 7634.07, pricef: 7702.41, change: 0},
  {date: '2018-06-09', price: 7611.89, pricef: 7654.88, change: 0},
  {date: '2018-06-10', price: 7224.37, pricef: 7253.06, change: 0},
  {date: '2018-06-11', price: 6683.86, pricef: 6684.97, change: 0},
  {date: '2018-06-12', price: 6757.30, pricef: 6753.43, change: 0},
  {date: '2018-06-13', price: 6368.57, pricef: 6340.00, change: 0},
  {date: '2018-06-14', price: 6346.14, pricef: 6356.60, change: 0},
  {date: '2018-06-15', price: 6537.52, pricef: 6500.00, change: 0},
  {date: '2018-06-16', price: 6359.95, pricef: 6312.72, change: 0},
  {date: '2018-06-17', price: 6518.00, pricef: 6506.94, change: 0},
  {date: '2018-06-18', price: 6465.54, pricef: 6395.98, change: 0},
  {date: '2018-06-19', price: 6734.75, pricef: 6715.60, change: 0},
  {date: '2018-06-20', price: 6752.70, pricef: 6745.93, change: 0},
  {date: '2018-06-21', price: 6712.14, pricef: 6699.49, change: 0},
  {date: '2018-06-22', price: 6148.95, pricef: 6100.00, change: 0},
  {date: '2018-06-23', price: 6095.99, pricef: 6024.25, change: 0},
  {date: '2018-06-24', price: 5781.31, pricef: 5694.96, change: 0},
  {date: '2018-06-25', price: 6293.16, pricef: 6271.33, change: 0},
  {date: '2018-06-26', price: 6187.59, pricef: 6175.86, change: 0},
  {date: '2018-06-27', price: 6109.36, pricef: 6111.45, change: 0},
  {date: '2018-06-28', price: 6104.65, pricef: 6121.00, change: 0},
  {date: '2018-06-29', price: 5903.82, pricef: 5940.42, change: 0},
  {date: '2018-06-30', price: 6379.10, pricef: 6438.69, change: 0},
  {date: '2018-07-01', price: 6312.21, pricef: 6398.50, change: 0},
  {date: '2018-07-02', price: 6623.63, pricef: 6701.99, change: 0},
  {date: '2018-07-03', price: 6588.90, pricef: 6657.00, change: 0},
  {date: '2018-07-04', price: 6681.09, pricef: 6738.93, change: 0},
  {date: '2018-07-05', price: 6616.01, pricef: 6642.11, change: 0},
  {date: '2018-07-06', price: 6566.00, pricef: 6601.51, change: 0},
  {date: '2018-07-07', price: 6560.03, pricef: 6593.23, change: 0},
  {date: '2018-07-08', price: 6743.66, pricef: 6787.89, change: 0},
  {date: '2018-07-09', price: 6733.80, pricef: 6728.26, change: 0},
  {date: '2018-07-10', price: 6381.40, pricef: 6368.23, change: 0},
  {date: '2018-07-11', price: 6354.58, pricef: 6346.02, change: 0},
  {date: '2018-07-12', price: 6170.80, pricef: 6137.00, change: 0},
  {date: '2018-07-13', price: 6262.64, pricef: 6223.58, change: 0},
  {date: '2018-07-14', price: 6244.09, pricef: 6209.38, change: 0},
  {date: '2018-07-15', price: 6389.51, pricef: 6354.04, change: 0},
  {date: '2018-07-16', price: 6640.00, pricef: 6643.56, change: 0},
  {date: '2018-07-17', price: 6780.40, pricef: 6794.43, change: 0},
  {date: '2018-07-18', price: 7427.43, pricef: 7419.78, change: 0},
  {date: '2018-07-19', price: 7400.41, pricef: 7375.00, change: 0},
  {date: '2018-07-20', price: 7467.74, pricef: 7489.14, change: 0},
  {date: '2018-07-21', price: 7395.63, pricef: 7387.28, change: 0},
  {date: '2018-07-22', price: 7526.83, pricef: 7570.50, change: 0},
  {date: '2018-07-23', price: 7730.27, pricef: 7857.26, change: 0},
  {date: '2018-07-24', price: 8178.75, pricef: 8369.28, change: 0},
  {date: '2018-07-25', price: 8117.67, pricef: 8246.13, change: 0},
  {date: '2018-07-26', price: 8208.36, pricef: 8362.60, change: 0},
  {date: '2018-07-27', price: 8149.67, pricef: 8266.60, change: 0},
  {date: '2018-07-28', price: 8113.23, pricef: 8230.00, change: 0},
  {date: '2018-07-29', price: 8232.13, pricef: 8376.92, change: 0},
  {date: '2018-07-30', price: 8120.20, pricef: 8244.20, change: 0},
  {date: '2018-07-31', price: 7757.99, pricef: 7930.00, change: 0},
  {date: '2018-08-01', price: 7601.48, pricef: 7752.16, change: 0},
  {date: '2018-08-02', price: 7515.25, pricef: 7649.74, change: 0},
  {date: '2018-08-03', price: 7478.73, pricef: 7490.00, change: 0},
  {date: '2018-08-04', price: 6998.60, pricef: 6950.63, change: 0},
  {date: '2018-08-05', price: 6953.58, pricef: 6930.00, change: 0},
  {date: '2018-08-06', price: 6976.55, pricef: 6948.64, change: 0},
  {date: '2018-08-07', price: 7114.96, pricef: 7078.90, change: 0},
  {date: '2018-08-08', price: 6473.16, pricef: 6439.22, change: 0},
  {date: '2018-08-09', price: 6445.56, pricef: 6419.99, change: 0},
  {date: '2018-08-10', price: 6456.26, pricef: 6427.78, change: 0},
  {date: '2018-08-11', price: 6109.46, pricef: 6082.72, change: 0},
  {date: '2018-08-12', price: 6315.84, pricef: 6282.37, change: 0},
  {date: '2018-08-13', price: 6285.28, pricef: 6275.00, change: 0},
  {date: '2018-08-14', price: 6029.30, pricef: 5999.50, change: 0},
  {date: '2018-08-15', price: 6422.00, pricef: 6415.56, change: 0},
  {date: '2018-08-16', price: 6403.65, pricef: 6398.86, change: 0},
  {date: '2018-08-17', price: 6474.23, pricef: 6422.70, change: 0},
  {date: '2018-08-18', price: 6359.33, pricef: 6309.46, change: 0},
  {date: '2018-08-19', price: 6410.89, pricef: 6364.87, change: 0},
  {date: '2018-08-20', price: 6424.50, pricef: 6391.35, change: 0},
  {date: '2018-08-21', price: 6413.35, pricef: 6369.56, change: 0},
  {date: '2018-08-22', price: 6480.00, pricef: 6423.49, change: 0},
  {date: '2018-08-23', price: 6431.14, pricef: 6398.24, change: 0},
  {date: '2018-08-24', price: 6501.67, pricef: 6482.89, change: 0},
  {date: '2018-08-25', price: 6739.99, pricef: 6736.26, change: 0},
  {date: '2018-08-26', price: 6676.50, pricef: 6670.00, change: 0},
  {date: '2018-08-27', price: 6751.72, pricef: 6728.82, change: 0},
  {date: '2018-08-28', price: 7050.83, pricef: 7047.45, change: 0},
  {date: '2018-08-29', price: 6978.48, pricef: 6978.78, change: 0},
  {date: '2018-08-30', price: 6864.92, pricef: 6874.46, change: 0},
  {date: '2018-08-31', price: 6959.42, pricef: 6950.69, change: 0},
  {date: '2018-09-01', price: 7170.01, pricef: 7164.86, change: 0},
  {date: '2018-09-02', price: 7218.10, pricef: 7207.57, change: 0},
  {date: '2018-09-03', price: 7289.03, pricef: 7276.05, change: 0},
  {date: '2018-09-04', price: 7379.77, pricef: 7356.82, change: 0},
  {date: '2018-09-05', price: 6990.87, pricef: 6975.59, change: 0},
  {date: '2018-09-06', price: 6424.00, pricef: 6379.24, change: 0},
  {date: '2018-09-07', price: 6379.58, pricef: 6335.50, change: 0},
  {date: '2018-09-08', price: 6428.43, pricef: 6412.13, change: 0},
  {date: '2018-09-09', price: 6375.07, pricef: 6342.65, change: 0},
  {date: '2018-09-10', price: 6298.63, pricef: 6262.15, change: 0},
  {date: '2018-09-11', price: 6254.20, pricef: 6240.00, change: 0},
  {date: '2018-09-12', price: 6272.68, pricef: 6252.97, change: 0},
  {date: '2018-09-13', price: 6482.58, pricef: 6467.22, change: 0},
  {date: '2018-09-14', price: 6481.21, pricef: 6404.34, change: 0},
  {date: '2018-09-15', price: 6535.11, pricef: 6446.51, change: 0},
  {date: '2018-09-16', price: 6481.21, pricef: 6387.57, change: 0},
  {date: '2018-09-17', price: 6266.11, pricef: 6136.65, change: 0},
  {date: '2018-09-18', price: 6361.98, pricef: 6247.53, change: 0},
  {date: '2018-09-19', price: 6329.89, pricef: 6206.47, change: 0},
  {date: '2018-09-20', price: 6415.36, pricef: 6297.64, change: 0},
  {date: '2018-09-21', price: 6684.58, pricef: 6596.66, change: 0},
  {date: '2018-09-22', price: 6683.95, pricef: 6625.00, change: 0},
  {date: '2018-09-23', price: 6688.32, pricef: 6614.00, change: 0},
  {date: '2018-09-24', price: 6611.46, pricef: 6552.71, change: 0},
  {date: '2018-09-25', price: 6404.95, pricef: 6354.02, change: 0},
  {date: '2018-09-26', price: 6539.64, pricef: 6463.52, change: 0},
  {date: '2018-09-27', price: 6498.04, pricef: 6417.41, change: 0},
  {date: '2018-09-28', price: 6672.30, pricef: 6607.00, change: 0},
  {date: '2018-09-29', price: 6591.40, pricef: 6516.54, change: 0},
  {date: '2018-09-30', price: 6605.18, pricef: 6548.36, change: 0},
  {date: '2018-10-01', price: 6566.88, pricef: 6506.03, change: 0},
  {date: '2018-10-02', price: 6560.41, pricef: 6475.00, change: 0},
  {date: '2018-10-03', price: 6509.61, pricef: 6432.07, change: 0},
  {date: '2018-10-04', price: 6595.00, pricef: 6529.66, change: 0},
  {date: '2018-10-05', price: 6595.70, pricef: 6516.20, change: 0},
  {date: '2018-10-06', price: 6601.77, pricef: 6506.99, change: 0},
  {date: '2018-10-07', price: 6585.00, pricef: 6489.56, change: 0},
  {date: '2018-10-08', price: 6670.00, pricef: 6609.35, change: 0},
  {date: '2018-10-09', price: 6642.92, pricef: 6573.24, change: 0},
  {date: '2018-10-10', price: 6591.25, pricef: 6490.20, change: 0},
  {date: '2018-10-11', price: 6290.96, pricef: 6141.15, change: 0},
  {date: '2018-10-12', price: 6340.83, pricef: 6159.65, change: 0},
  {date: '2018-10-13', price: 6327.50, pricef: 6127.40, change: 0},
  {date: '2018-10-14', price: 6382.04, pricef: 6141.94, change: 0},
  {date: '2018-10-15', price: 6910.20, pricef: 6365.12, change: 0},
  {date: '2018-10-16', price: 6720.15, pricef: 6400.17, change: 0},
  {date: '2018-10-17', price: 6746.59, pricef: 6399.35, change: 0},
  {date: '2018-10-18', price: 6709.52, pricef: 6386.82, change: 0},
  {date: '2018-10-19', price: 6569.41, pricef: 6342.97, change: 0},
  {date: '2018-10-20', price: 6576.02, pricef: 6358.04, change: 0},
  {date: '2018-10-21', price: 6644.99, pricef: 6421.68, change: 0},
  {date: '2018-10-22', price: 6561.38, pricef: 6377.29, change: 0},
  {date: '2018-10-23', price: 6557.57, pricef: 6365.38, change: 0},
  {date: '2018-10-24', price: 6579.60, pricef: 6397.90, change: 0},
  {date: '2018-10-25', price: 6545.00, pricef: 6381.13, change: 0},
  {date: '2018-10-26', price: 6539.68, pricef: 6395.04, change: 0},
  {date: '2018-10-27', price: 6494.97, pricef: 6385.16, change: 0},
  {date: '2018-10-28', price: 6488.10, pricef: 6390.30, change: 0},
  {date: '2018-10-29', price: 6380.65, pricef: 6265.40, change: 0},
  {date: '2018-10-30', price: 6357.71, pricef: 6258.99, change: 0},
  {date: '2018-10-31', price: 6392.33, pricef: 6324.69, change: 0},
  {date: '2018-11-01', price: 6365.81, pricef: 6307.66, change: 0},
  {date: '2018-11-02', price: 6428.40, pricef: 6356.25, change: 0},
  {date: '2018-11-03', price: 6370.72, pricef: 6322.52, change: 0},
  {date: '2018-11-04', price: 6483.26, pricef: 6412.14, change: 0},
  {date: '2018-11-05', price: 6474.56, pricef: 6424.53, change: 0},
  {date: '2018-11-06', price: 6500.00, pricef: 6456.81, change: 0},
  {date: '2018-11-07', price: 6547.63, pricef: 6517.40, change: 0},
  {date: '2018-11-08', price: 6537.15, pricef: 6486.48, change: 0},
  {date: '2018-11-09', price: 6427.89, pricef: 6370.54, change: 0},
  //huobi-huobi
  {date: '2018-11-10', price: 6454.61, pricef: 6403.25, change: 0},
  {date: '2018-11-11', price: 6380.48, pricef: 6348.45, change: 0},
  {date: '2018-11-12', price: 6450.76, pricef: 6400.23, change: 0},
  {date: '2018-11-13', price: 6459.96, pricef: 6340.65, change: 0},
  {date: '2018-11-14', price: 6232.28, pricef: 6069.08, change: 0},
  {date: '2018-11-15', price: 5675.81, pricef: 5462.54, change: 0},
  {date: '2018-11-16', price: 5647.69, pricef: 5491.59, change: 0},
  {date: '2018-11-17', price: 5601.30, pricef: 5424.38, change: 0},
  {date: '2018-11-18', price: 5641.68, pricef: 5510.76, change: 0},
  {date: '2018-11-19', price: 5216.93, pricef: 5064.39, change: 0},
  {date: '2018-11-20', price: 4950.00, pricef: 4766.00, change: 0},
  {date: '2018-11-21', price: 4632.51, pricef: 4493.26, change: 0},
  {date: '2018-11-22', price: 4559.57, pricef: 4444.66, change: 0},
  {date: '2018-11-23', price: 4404.11, pricef: 4262.56, change: 0},
  {date: '2018-11-24', price: 4372.49, pricef: 4254.98, change: 0},
  {date: '2018-11-25', price: 3882.06, pricef: 3749.96, change: 0},
  {date: '2018-11-26', price: 3835.00, pricef: 3703.00, change: 0},
  {date: '2018-11-27', price: 3781.45, pricef: 3671.00, change: 0},
  {date: '2018-11-28', price: 4248.25, pricef: 4198.00, change: 0},
  {date: '2018-11-29', price: 4270.60, pricef: 4236.65, change: 0},
  {date: '2018-11-30', price: 4028.30, pricef: 3951.53, change: 0},
  {date: '2018-12-01', price: 4219.35, pricef: 4144.99, change: 0},
  {date: '2018-12-02', price: 4176.45, pricef: 4093.95, change: 0},
  {date: '2018-12-03', price: 3880.00, pricef: 3795.14, change: 0},
  {date: '2018-12-04', price: 4023.02, pricef: 3932.57, change: 0},
  {date: '2018-12-05', price: 3878.40, pricef: 3795.17, change: 0},
  {date: '2018-12-06', price: 3695.53, pricef: 3562.00, change: 0},
  {date: '2018-12-07', price: 3315.50, pricef: 3233.84, change: 0},
  {date: '2018-12-08', price: 3361.86, pricef: 3317.65, change: 0},
  {date: '2018-12-09', price: 3575.20, pricef: 3530.00, change: 0},
  {date: '2018-12-10', price: 3430.28, pricef: 3398.84, change: 0},
  {date: '2018-12-11', price: 3351.67, pricef: 3300.00, change: 0},
  {date: '2018-12-12', price: 3458.10, pricef: 3438.55, change: 0},
  {date: '2018-12-13', price: 3415.90, pricef: 3379.32, change: 0},
  {date: '2018-12-14', price: 3260.54, pricef: 3169.11, change: 0},
  {date: '2018-12-15', price: 3172.10, pricef: 3075.01, change: 0},
  {date: '2018-12-16', price: 3244.31, pricef: 3167.19, change: 0},
  {date: '2018-12-17', price: 3420.35, pricef: 3343.99, change: 0},
  {date: '2018-12-18', price: 3512.00, pricef: 3443.88, change: 0},
  {date: '2018-12-19', price: 3749.21, pricef: 3669.00, change: 0},
  {date: '2018-12-20', price: 3987.98, pricef: 3904.10, change: 0},
  {date: '2018-12-21', price: 3946.27, pricef: 3862.15, change: 0},
  {date: '2018-12-22', price: 3829.00, pricef: 3731.00, change: 0},
  {date: '2018-12-23', price: 3909.03, pricef: 3834.22, change: 0},
  {date: '2018-12-24', price: 4024.78, pricef: 3934.11, change: 0},
  {date: '2018-12-25', price: 3687.85, pricef: 3628.45, change: 0},
  {date: '2018-12-26', price: 3708.15, pricef: 3645.78, change: 0},
  {date: '2018-12-27', price: 3718.93, pricef: 3650.14, change: 0},
  {date: '2018-12-28', price: 3781.00, pricef: 3728.30, change: 0},
  {date: '2018-12-29', price: 3822.97, pricef: 3747.44, change: 0},
  {date: '2018-12-30', price: 3768.66, pricef: 3687.68, change: 0},
  {date: '2018-12-31', price: 3754.47, pricef: 3678.60, change: 0},
];

class FuturesPage extends Component {

  state = {data: [], loading: true}

  componentDidMount(){

    const size = (getTodayZeroStamp() - START_TIME) / 86400000 + 1;

    //现货
    axios.get('https://api.huobi.pro/market/history/kline?symbol=btcusdt&period=1day&size=' + size).then(res => {
      let chartData = [];  
      const nowData = [...res.data.data.reverse()];
      nowData.forEach(item => {
        chartData.push({
          date: moment(parseInt(item.id*1000)).format('YYYY-MM-DD'),
          price: item.close,
        })
      });

      //期货
      axios.get('https://api.hbdm.com/market/history/kline?period=1day&symbol=BTC_CQ&size=' + size).then(res => {
        res.data.data.forEach((item, index) => {
          chartData[index].pricef = item.close;
          chartData[index].change = parseFloat(parseFloat(item.close - chartData[index].price).toFixed(2));
        });
        STATIC_DATA.forEach(item => {
          item.change = parseFloat(parseFloat(item.pricef - item.price).toFixed(2));
        });
        this.setState({data: [...STATIC_DATA, ...chartData], loading: false});
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      showCorsHelper();
    });
  }

  render(){
    const data = this.state.data;
    const scale = {
      price: { alias: '现货价' },
      pricef: { alias: '期货价'},
      change: { alias: '价格差值'},
    };
    return (
      <div>
        <h1 style={{textAlign:"center"}}>BTC季度合约价格和现货价格的关系</h1>
        <Spin tip='图表加载中...' spinning={this.state.loading}>
          <Chart height={800} padding={[20, 45, 20, 45]} data={data} scale={scale} forceFit>
            <Tooltip />
            <View end={{x: 1, y: 0.5}} data = {data}>
              <Axis />
              <Geom type="area" position="date*change" color="#18a1cd" size={2.5} shape="smooth" />
            </View>
            <View start={{ x: 0, y: 0.55}} data={data}>
              <Axis />
              <Geom type="line" position="date*price" color="#fdae6b" size={2.5} shape="smooth" />
              <Geom type="line" position="date*pricef" color="#18a1cd" size={2.5} shape="smooth" />
            </View>
          </Chart>
        </Spin>
      </div>
    )
  }
}

export default FuturesPage;