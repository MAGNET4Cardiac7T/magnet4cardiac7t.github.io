---
layout: single
classes: wide
title: Detailed Program
sidebar:
    nav: sidebar-navigation
---



<div>
    {% for day in site.data.spring.days %}
        <div class="spring-school-day">
            <h2>{{day.title}}</h2>
            {% for session in day.sessions%}
                <div class="session-box">
                    <div class="session-title" style="display: flex">
                        <div style="flex-shrink: 0">{{session.start_time}} - {{session.end_time}}</div>
                        <div style="margin-left: 12px">
                            {% if session.title == "Coffee Break" %}
                                <img class="coffee-break" alt="coffee bean image" src="{{'/assets/img/coffee.png' | relative_url}}">
                            {% endif %}
                            {{session.title}}
                        </div>
                    </div>
                    <div class="more-information-section" style="">
                        <p style="margin-left: 8px">Details of each session will be announced later</p>
                    </div>
                </div>
            {% endfor %}
        </div>
    {% endfor %}
</div>