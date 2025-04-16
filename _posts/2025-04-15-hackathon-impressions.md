---
layout: single
classes: wide
title: Spring School 2025 Hackathon Impressions
image_path: /assets/img/posts/hackathon/hackathon.jpeg
relative_improvement_homogeneity: /assets/img/posts/hackathon/homogeneity_boxplot.png
relative_improvement_sar: /assets/img/posts/hackathon/sar_boxplot.png
example_geometry: /assets/img/posts/hackathon/example_geometry.png
ranks_per_simulation: /assets/img/posts/hackathon/ranks_per_simulation.png
ranks_averaged: /assets/img/posts/hackathon/ranks_averaged.png
first_place: /assets/img/posts/hackathon/first_place.jpg
second_place: /assets/img/posts/hackathon/second_place.jpg
---

During the Spring School on *Physics Informed Machine Learning for Medical Sciences*, we had the opportunity to host a hackathon where participants could apply their knowledge and skills in a practical setting. The hackathon was a great success, with participants working on a specific problem related to MRI imaging and safety.

<img alt="spring school banner image" src="{{page.image_path | relative_url }}" width="100%">

## Hackathon task

Participants were tasked with optimizing the phase and amplitude of MRI coil configurations to achieve specific objectives, such as maximizing \\(B_1^+\\) field homogeneity or minimizing peak SAR while maintaining homogeneity. The task required participants to work with precomputed electric (\\(E\\)) and magnetic (\\(H\\)) field data for a simulated MRI environment, where the contributions of individual dipoles were provided separately. 

Using this data, participants had to calculate the combined fields based on their chosen coil configurations, which involved adjusting the phase (\\(\varphi\\)) and amplitude (\\(A\\)) of each dipole. The optimization process required balancing trade-offs between field homogeneity and safety constraints, such as minimizing the Specific Absorption Rate (SAR). 

Two cost functions were provided for evaluation:
1. **\\(B_1^+\\) Homogeneity**: Maximizing the mean strength of the \\(B_1^+\\) field while minimizing its variability.
2. **\\(B_1^+\\) Homogeneity with SAR Constraint**: Incorporating a penalty term to reduce peak SAR while maintaining field homogeneity.

Participants were encouraged to explore various optimization techniques, including global search algorithms, gradient-based methods, and parallel processing, to achieve the best results. The problem highlighted the interplay between physics, machine learning, and medical imaging, offering a challenging yet rewarding experience for all involved.

## Results
Overall 7 teams participated in the hackathon, each with their own unique approach to the problem including gradient descent, genetic algorithms, and other optimization techniques. The results were evaluated based on the two cost functions mentioned above.
The following two figures show the relative improvement of the cost function values for the two different tasks on various simulations. One of the groups submitted two different solutions, which are labeled as group6_1 and group6_2, but only their first solution was counted for the challenge.

<img alt="Relative improvement for the B1 homogeneity cost function" src="{{page.relative_improvement_homogeneity | relative_url }}" width="100%">
**Figure 1:** Relative improvement of the cost function values for the \\(B_1^+\\) homogeneity task.
<br><br>

<img alt="Relative improvement for the B1 homogeneity with SAR constraint cost function" src="{{page.relative_improvement_sar| relative_url }}" width="100%">
**Figure 2:** Relative improvement of the cost function values for the \\(B_1^+\\) homogeneity with SAR constraint task.

The results show that all teams were able to improve the cost function values significantly, with some teams achieving remarkable results. While the improvement is not uniform across all simulations, the best performing teams were able to achieve a relative improvement of up to 64% for the \\(B_1^+\\) homogeneity task and up to 60% for the \\(B_1^+\\) homogeneity with SAR constraint task.


The best performing teams were able to achieve a relative improvement of up to 65% for the \\(B_1^+\\) homogeneity task and up to 430% for the \\(B_1^+\\) homogeneity with SAR constraint task.

**Table 1:** Relative improvement of the cost function values for the \\(B_1^+\\) homogeneity task.

| group_name   | sim 1   | sim 2   | sim 3   | sim 4   | sim 5   |
|:-------------|:--------|:--------|:--------|:--------|:--------|
| group1       | 47.30%  | 39.35%  | 11.68%  | 64.99%  | 12.34%  |
| group2       | 42.75%  | 38.17%  | 1.68%   | 59.97%  | 12.25%  |
| group3       | 55.70%  | 39.32%  | 15.51%  | 64.98%  | 14.06%  |
| group4       | 20.35%  | 35.53%  | 1.47%   | 60.10%  | 4.10%   |
| group5       | 29.28%  | 37.75%  | 0.82%   | 60.00%  | 0.49%   |
| group6_1     | 40.28%  | 39.35%  | 4.24%   | 64.99%  | 12.28%  |
| group6_2     | 54.90%  | 39.24%  | 12.68%  | 64.92%  | 12.62%  |
| group7       | 44.30%  | 39.34%  | 2.86%   | 64.82%  | 12.53%  |

<br><br>

**Table 2:** Relative improvement of the cost function values for the \\(B_1^+\\) homogeneity with SAR constraint task.

| group_name   | sim 1   | sim 2   | sim 3   | sim 4   | sim 5   |
|:-------------|:--------|:--------|:--------|:--------|:--------|
| group1       | 64.24%  | 277.90% | 112.82% | 439.93% | 4.11%   |
| group2       | 13.91%  | 195.80% | 98.76%  | 343.18% | 47.37%  |
| group3       | 43.24%  | 242.99% | 71.11%  | 376.05% | 50.99%  |
| group4       | 19.76%  | 233.16% | 62.30%  | 361.54% | 25.18%  |
| group5       | -0.03%  | -59.64% | -25.54% | -42.63% | -63.15% |
| group6_1     | 41.45%  | 234.94% | 5.85%   | 351.30% | 1.41%   |
| group6_2     | 32.08%  | 268.89% | 103.72% | 441.70% | 62.71%  |
| group7       | 11.39%  | 16.41%  | 5.31%   | 397.34% | 1.93%   |

The simulations are taken from our upcoming paper on the topic, which will be published in the near future. The results are based on a set of 5 simulations for each group, with varying degree of complexity as shown in Table 3 below.
The simulations vary in terms of the number of different objects placed inside the array of dipoles. An example of the geometry can be seen in Figure 3:

**Table 3:** Overview of the simulations used for the hackathon.

| simulation   | description   |
|:-------------|:--------|
| sim1        | children_0_tubes_5 |
| sim2        | children_1_tubes_2 |
| sim3        | children_1_tubes_7 |
| sim4        | children_2_tubes_4 |
| sim5        | children_3_tubes_10 |

<img alt="Example geometry of objects used for the task" src="{{page.example_geometry | relative_url }}" width="100%">
**Figure 3:** Example geometry of objects used for the task. 
<br><br>

## Winning solution
The winning solution was submitted by group 1, which achieved the best average rank across all simulations for both tasks. They used a fine-tuned CMAES algorithm with a warm-up phase using the TPE algorithm. Both algorithms were implemented using the Optuna library. The overall average rank and the average rank for each simulation are shown in the Figure 4 and Figure 5 respectively.

<img alt="Rank of each team for each simulation" src="{{page.ranks_per_simulation | relative_url }}" width="100%">
**Figure 4:** Rank of each team for each simulation based on the relative improvement of the cost function values.
<br><br>

<img alt="Average rank of each team" src="{{page.ranks_averaged| relative_url }}" width="100%">
**Figure 5:** Average rank for each team over all simulations and cost functions.
<br><br>

The winners and the runner-up teams of the hackathon were awarded with a small gift from the organisational team:

<p float="left">
  <img alt="Winning team" src="{{page.first_place | relative_url }}"  width="49%" />
  <img alt="Runner-up team" src="{{page.second_place | relative_url }}"  width="49%" /> 
</p>
**Figure 6:** The winning team (left) and the runner-up team (right) of the hackathon challenge during the spring school.
<br><br>

## Code availability
The code for all submissions as well as the links to the data is available on our [![Repo](https://badgen.net/badge/icon/GitHub?icon=github&label)](https://github.com/MAGNET4Cardiac7T). 

| group_name   | Repo   |
|:-------------|:--------|
| group1       | [magnet4cardiac7t/hackathon_group1](https://github.com/MAGNET4Cardiac7T/hackathon_group1)  |
| group2       | [magnet4cardiac7t/hackathon_group2](https://github.com/MAGNET4Cardiac7T/hackathon_group2)  |
| group3       | [magnet4cardiac7t/hackathon_group3](https://github.com/MAGNET4Cardiac7T/hackathon_group3)  |
| group4       | [magnet4cardiac7t/hackathon_group4](https://github.com/MAGNET4Cardiac7T/hackathon_group4)  |
| group5       | [magnet4cardiac7t/hackathon_group5](https://github.com/MAGNET4Cardiac7T/hackathon_group5)  |
| group6_1     | [magnet4cardiac7t/hackathon_group6_1](https://github.com/MAGNET4Cardiac7T/hackathon_group6_1)  |
| group6_2     | [magnet4cardiac7t/hackathon_group6_2](https://github.com/MAGNET4Cardiac7T/hackathon_group6_2)  |
| group7       | [magnet4cardiac7t/hackathon_group7](https://github.com/MAGNET4Cardiac7T/hackathon_group7)  |


Feel free to try the challenge yourself and submit your results! The setup code is available in the [hackathon repository](https://github.com/MAGNET4Cardiac7T/hackathon).
