---
title: "Prompt Caching: Optimizing LLM Efficiency and Cost"
description: "Prompt caching is a technique that allows models to save on computation and costs by caching results for repetitive input segments."
category: "ai-zaklady"
date: 2026-06-19T00:00:00.000Z
sk_slug: "prompt-caching-vysvetlenie"
reading_time: 8
---

# Prompt Caching: Optimizing LLM Efficiency and Cost

Prompt caching is a technique that allows models to save on computation and costs by caching results for repetitive input segments. Instead of the model re-processing the entire prompt every single time, it caches results for shared prefixes. If the beginning of a prompt remains identical, the model does not need to recompute these tokens and can immediately proceed with generation.

Technically, this works via a prefix cache. The prompt is divided into segments, each with its own hash. If the prefix hash matches an existing entry in the cache, a cache hit occurs, and the model skips the computation for that segment. In the event of a cache miss, the result is computed and stored in the cache for future use. Anthropic implements this as a system where up to 100,000 prefix tokens can be utilized within a single window, which significantly shifts the economics for long system prompts.
