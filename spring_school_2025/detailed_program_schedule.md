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
            {% for session in day.sessions %}
                <div class="session-box" id="{{session.id}}" style="background-color: {{session.color}}; border-radius: 4px; padding: 6px; border: 1px solid gray;">
                    <div class="session-title" style="display: flex;">
                        <div style="flex-shrink: 0; margin-left: 8px;">{{session.start_time}} - {{session.end_time}}</div>
                        <div style="margin-left: 12px">
                            {% if session.title == "Coffee Break" %}
                                <img class="coffee-break" alt="coffee bean image" src="{{'/assets/img/coffee.png' | relative_url}}">
                            {% endif %}
                            {{session.title}}
                        </div>
                    </div>

                    <div class="more-information-section">
                        {% if session.description %}
                            <p style="margin-left: 8px"><span style="font-weight: bold">Content: </span> {{session.description}}</p>
                        {% else %}
                            <p style="margin-left: 8px">Details of each session will be announced later</p>
                        {% endif %}
                        

                        <div style="margin-left: 8px;"><span style="font-weight: bold">Speaker: </span>
                            {% if session.external_speaker_idx %}
                                {% for speaker in site.keynote_speakers %}
                                    {% if speaker.idx == session.external_speaker_idx %}
                                        {% assign external_speaker_profile = speaker %}
                                    {% endif %}
                                {% endfor %}
                                <a style='color: black;' href='{{external_speaker_profile.url}}'> {{external_speaker_profile.title}}</a>
                            {% endif %}

                            {% if session.internal_speaker_idx %}
                                {% for speaker in site.team_members %}
                                    {% if speaker.idx == session.internal_speaker_idx %}
                                        {% assign internal_speaker_profile = speaker %}
                                    {% endif %}
                                {% endfor %}
                                <a style='color: black;' href='{{internal_speaker_profile.url}}'> {{internal_speaker_profile.title}}</a>
                            {% endif %}

                        </div>


                    </div>

                </div>
            {% endfor %}
        </div>
    {% endfor %}
</div>
