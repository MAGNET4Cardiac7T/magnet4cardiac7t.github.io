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
