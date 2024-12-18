---
layout: magnet
classes: wide
title: Program Overview
sidebar:
    nav: sidebar-navigation
breadcrumbs: true
---

<div style="margin-bottom: 12px">
<p>This is the general overview of the whole week of spring break. More information could be added here!</p>
<span>For detailed schedule of Spring School 2025 please </span><a href="{{'/spring_school_2025/detailed_program_schedule' | relative_url}}">click here.</a>
</div>


<full-calendar shadow style="font-weight: normal; font-size: 13px; color: black" options='{
    "initialView": "timeGridWeek",
    "initialDate": "{{site.data.spring.days[0].date}}",
    "scrollTime": "09:00:00",
    "headerToolbar": {
        "end":""
    },
    "eventMinHeight": "15",
    "slotDuration": "00:15:00",
    "slotLabelInterval": "01:00",
    "eventTextColor": "black",
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
  
