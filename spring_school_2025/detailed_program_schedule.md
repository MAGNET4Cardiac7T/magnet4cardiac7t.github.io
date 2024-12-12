---
layout: magnet
classes: wide
title: Program Overview
sidebar:
    nav: sidebar-navigation
days:
    -   title: "Monday 7th April 2025"
        sessions:
            -   title: "Session 1: Welcome Ceremony"
                start_time: "9:00"
                end_time: "9:30"
            -   title: "Session 2: Keynote"
                start_time: "9:30"
                end_time: "10:30"
            -   title: "Coffee Break"
                start_time: "10:30"
                end_time: "11:00"
            -   title:  "Session 3: Introduction to PINNs"
                start_time: "11:00"
                end_time: "12:30"
            -   title:   Lunch Break
                start_time: "12:30"
                end_time: "13:30"
            -   title: "Session 4: Tutorial PINNs"
                start_time: "14:00"
                end_time: "15:30"
            -   title: "Coffee Break"
                start_time: "16:00"
                end_time: "16:30"
            -   title: "Session 5: Poster Session"
                start_time: "16:30"
                end_time: "17:30"

    -   title: "Monday 8th April 2025"
        sessions:
            -   title: "Session 1: Applications of PINNs in the medical field"
                start_time: "9:00"
                end_time: "10:30"
            -   title: "Coffee Break"
                start_time: "10:30"
                end_time: "11:00"
            -   title: "Session 2: Basics of Numerical Simulations"
                start_time: "11:00"
                end_time: "12:30"
            -   title: "Lunch Break"
                start_time: "12:30"
                end_time: "13:30"
            -   title: "Session 3: Hands-on Numerical Simulation + MRI Demo"
                start_time: "14:00"
                end_time: "15:30"
            -   title: "Coffee Break"
                start_time: "16:00"
                end_time: "16:30"
            -   title: "Session 4: How MRI Works (focus on physics)"
                start_time: "16:30"
                end_time: "17:30"
            -   title: "Dinner + Social"
                start_time: "18:00"
                end_time: "22:00"

    -   title: "Monday 9th April 2025"
        sessions:
            -   title: "Session 1: 5T/3T/7T/ULF MRI comparison, safety and other issues"
                start_time: "9:00"
                end_time: "10:30"
            -   title: "Coffee Break"
                start_time: "10:30"
                end_time: "11:00"
            -   title: "Session 2: MAGNET4Cardiac7T Project Overview"
                start_time: "11:00"
                end_time: "12:30"
            -   title: "Lunch Break"
                start_time: "12:30"
                end_time: "13:30"
            -   title: "Session 3: Hackathon"
                start_time: "14:00"
                end_time: "15:30"
            -   title: "Coffee Break"
                start_time: "16:00"
                end_time: "16:30"
            -   title: "Session 4: Hackathon"
                start_time: "16:30"
                end_time: "17:30"
            -   title: "Dinner + Social"
                start_time: "18:00"
                end_time: "22:00"

    -   title: "Monday 10th April 2025"
        sessions:
            -   title: "Session 1: Keynote: someone from Industry?"
                start_time: "9:00"
                end_time: "10:30"
            -   title: "Coffee Break"
                start_time: "10:30"
                end_time: "11:00"
            -   title: "Session 2: Solve Physical Problem with PINNs"
                start_time: "11:00"
                end_time: "12:30"
            -   title: "Lunch Break"
                start_time: "12:30"
                end_time: "13:30"
            -   title: "Session 3: Other Applications of Physics-Guided/-Inspired/-Informed DL"
                start_time: "14:00"
                end_time: "15:30"
            -   title: "Coffee Break"
                start_time: "16:00"
                end_time: "16:30"
            -   title: "Session 4: Hackathon"
                start_time: "16:30"
                end_time: "17:30"
            -   title: "Dinner + Social"
                start_time: "18:00"
                end_time: "22:00"

    -   title: "Monday 11th April 2025"
        sessions:
            -   title: "Session 1: Tutorial Slot"
                start_time: "9:00"
                end_time: "10:30"
            -   title: "Coffee Break"
                start_time: "10:30"
                end_time: "11:00"
            -   title: "Session 2: Other Applications of Physics-Guided/-Inspired/-Informed DL"
                start_time: "11:00"
                end_time: "12:30"
            -   title: "Lunch Break"
                start_time: "12:30"
                end_time: "13:30"
            -   title: "Session 3: Wrap-up/Hackathon Results/Feedback for Summer School"
                start_time: "14:00"
                end_time: "15:30"
            -   title: "Coffee Break"
                start_time: "16:00"
                end_time: "16:30"
            -   title: "Session 4: Hackathon"
                start_time: "16:30"
                end_time: "17:30"
            -   title: "Dinner + Social"
                start_time: "18:00"
                end_time: "22:00"
---



<div>
    {% for day in page.days %}
        <div class="spring-school-day">
            <h2>{{day.title}}</h2>
            {% for session in day.sessions%}
                <div class="session-box" style="">
                    <div class="session-title" style="">
                        <span>{{session.start_time}} - {{session.end_time}}</span>
                        <span style="margin-left: 12px">
                            {% if session.title == "Coffee Break" %}
                                <img class="coffee-break" alt="coffee bean image" src="{{'/assets/img/coffee.png' | relative_url}}">
                            {% endif %}
                            {{session.title}}
                        </span>
                    </div>
                    <div class="more-information-section" style="">
                        <p style="margin-left: 8px">Add More information here like speaker details and venue location.</p>
                    </div>
                </div>
            {% endfor %}
        </div>
    {% endfor %}
</div>
