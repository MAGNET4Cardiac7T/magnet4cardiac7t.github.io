---
layout: single
classes: wide
title: "We submitted a paper to the ISMRM conference"
image_path: /assets/img/posts/farzads_ismrm_conference.png

---

Our team submitted the short manuscript "Prediction of EM Field Distribution in a Simple Homogenous Phantom at UHF MRI Using Physics-Informed Neural Networks (PINNs): Methodology in Data Generation"
at the annual ISMRM Conference. Keep reading to learn more about our work.

<div>
    <img alt="farzads ismrm conference picture" src="{{page.image_path | relative_url}}" width="100%">
</div>




## Abstract

Specific Absorption Rate (SAR) calculation is the most crucial analysis at ultra-high-field (UHF) 7T MRI, as it is related to patient safety. Current SAR computation methods rely on computationally intensive simulations, which are often impractically long for real-time clinical use. 

**Goal:** This study aims to develop a physics-informed neural network (PINN) capable of predicting electromagnetic (EM) field distribution at 7T MRI. 

**Approach**: A neural network is trained using data generated from EM simulations. One of Maxwell’s equations is implemented as a physical constraint within the neural network to improve the accuracy of the field prediction. 

**Results**: Introducing physics into neural networks enhances EM field prediction accuracy across the entire simulation domain. 

**Impact:** This study proposes a deep learning-based method for EM field prediction, which, by significantly reducing the computational time, can enable safer and more accessible 7T MRI.


