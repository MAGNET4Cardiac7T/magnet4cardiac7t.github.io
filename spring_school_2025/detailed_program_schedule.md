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
                <div class="session-box" id="{{session.id}}">
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
                        
                        {% if session.description %}
                            <p style="margin-left: 8px"><span style="font-weight: bold">Content: </span> {{session.description}}</p>
                        {% else %}
                            <p style="margin-left: 8px">Details of each session will be announced later</p>
                        {% endif %}
                        
                        {% if session.speaker_idx %}
                            {% for speaker in site.keynote_speakers %}
                                {% if speaker.idx == session.speaker_idx %}
                                    {% assign speaker_profile = speaker %}
                                {% endif %}
                            {% endfor %}
                            <div style="margin-left: 8px;"><span style="font-weight: bold">Speaker: </span> <a href='{{speaker_profile.url}}'> {{speaker_profile.title}}</a></div>
                        {% endif %}
                    </div>
                </div>
            {% endfor %}
        </div>
    {% endfor %}
</div>