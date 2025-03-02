---
layout: single
classes: wide
title: "GrINd: Grid Interpolation Network for Scattered Observations"

image_path: /assets/img/posts/grind.png
---

We are happy to announce that our paper "GrINd: Grid Interpolation Network for Scattered Observations" got accepted for the Research Track at ECML-PKDD 2024! 
In our work we investigate if Fourier Interpolation can improve the prediction accuracy of physical systems in a low-resolution data regime on the Dynabench Benchmark.

<img alt="image representing the working of GrIND paper." src="{{page.image_path | relative_url}}">

## Abstract
Predicting the evolution of spatiotemporal physical systems from sparse and scattered observational data poses a significant challenge in various scientific domains. 
Traditional methods rely on dense grid-structured data, limiting their applicability in scenarios with sparse observations. 
To address this challenge, we introduce GrINd (Grid Interpolation Network for Scattered Observations), 
a novel network architecture that leverages the high-performance of grid-based models by mapping scattered observations onto a high-resolution grid using a Fourier Interpolation Layer. 
In the high-resolution space, a NeuralPDE-class model predicts the system's state at future timepoints using differentiable ODE solvers and fully convolutional neural networks parametrizing the system's dynamics. 
We empirically evaluate GrINd on the DynaBench benchmark dataset, comprising six different physical systems observed at scattered locations, demonstrating its state-of-the-art performance compared to existing models. 
GrINd offers a promising approach for forecasting physical systems from sparse, scattered observational data, extending the applicability of deep learning methods to real-world scenarios with limited data availability.


