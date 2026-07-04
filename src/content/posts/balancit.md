---
title: "BalancIt: ML-Driven Rate Limiting and Autoscaling for Kubernetes"
description: "How I built an ML control plane that throttles attackers and scales infrastructure automatically."
pubDatetime: 2026-07-04
tags: ["kubernetes", "ml", "devops"]
---

I built BalancIt, a Kubernetes-native system that uses machine learning to detect anomalies, limit bad traffic, and autoscale pods automatically.

## The Problem

Traditional rate limiters use fixed thresholds. They either block too much or too little. Autoscalers react too slow. I wanted a system that adapts.

## What I Built

BalancIt is an ML control plane sitting inside a Kubernetes cluster. It watches incoming traffic, detects anomalies in real time, and makes two decisions simultaneously:

- Rate limit attackers at the gateway
- Scale pods up or down via HPA

## How It Works

Three signals vote on whether traffic is anomalous:

1. **HST score** - Half-Space Trees anomaly detector
2. **Raw RPS deviation** - sudden traffic spikes
3. **Entropy collapse** - request diversity drop

If 2 of 3 vote anomalous, the system acts.

## Results

- 96.6% attacker throttle rate
- 497ms p99 latency under attack
- 33% infrastructure reduction

## Stack

Go, Python, FastAPI, Kubernetes, Prometheus, Locust, Kind
