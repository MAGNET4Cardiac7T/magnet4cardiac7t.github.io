---
layout: single
classes: wide
title: Program Overview
sidebar:
    nav: sidebar-navigation
---

This is an overview of the spring school schedule, including all the session, breaks and evening program.

A detailed schedule with the description of each session will be provided at a later date.

Please also note that the schedule is preliminary and subject to change.


<full-calendar shadow style="font-weight: normal; font-size: 16px; color: black;" options='{
    "initialView": "timeGridWeek",
    "initialDate": "{{site.data.spring.days[0].date}}",
    "scrollTime": "09:00:00",
    "headerToolbar": {
        "end":""
    },
    "dayHeaderFormat" : {
        "weekday": "long"
    },
    "weekends": false,
    "allDaySlot": false,
    "eventMinHeight": "15",
    "slotDuration": "00:15:00",
    "slotMinTime": "09:00:00",
    "slotMaxTime": "22:00:00",
    "slotLabelInterval": "01:00",
    "eventTextColor": "black",
    "contentHeight": "auto",
    "events": [
        {% for day in site.data.spring.days %}
            {% assign first_day = forloop.first %}

            {% for session in day.sessions %}
                {% if forloop.first == true and first_day == false %}
                    ,
                {% endif %}
                {
                    "title": "{{session.title}}",
                    "start": "{{day.date}}T{{session.start_time}}",
                    "end": "{{day.date}}T{{session.end_time}}",
                    "color": "{{session.color}}"
                }
                {% if forloop.last == false %}
                    ,
                {% endif %}
            {% endfor %}

        {% endfor %}
    ]
    }'></full-calendar>

## Legend
<div style="display: flex; align-items: center;">
    <div style="height: 40px; width: 40px; background-color: #d7e4bc; margin-right: 10px; margin-bottom: 10px"></div>
    <span>Keynotes</span>
</div>
<div style="display: flex; align-items: center;">
    <div style="height: 40px; width: 40px; background-color: #a5b6ca; margin-right: 10px; margin-bottom: 10px"></div>
    <span>Lectures</span>
</div>
<div style="display: flex; align-items: center;">
    <div style="height: 40px; width: 40px; background-color: #ffe698; margin-right: 10px; margin-bottom: 10px"></div>
    <span>Hands-on sessions</span>
</div>
<div style="display: flex; align-items: center;">
    <div style="height: 40px; width: 40px; background-color: #fbc08f; margin-right: 10px; margin-bottom: 10px"></div>
    <span>Special sessions</span>
</div>
<div style="display: flex; align-items: center;">
    <div style="height: 40px; width: 40px; background-color: #d9d9d8; margin-right: 10px; margin-bottom: 10px"></div>
    <span>Breaks and Evening Program</span>
</div>
