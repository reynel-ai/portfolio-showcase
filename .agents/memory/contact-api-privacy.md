---
name: Contact API privacy
description: Privacy constraints for the public portfolio contact endpoint.
---

The public contact endpoint should accept submissions but must not expose submitted messages to unauthenticated callers. Keep rate limits and request-size limits on the public form.

**Why:** Contact submissions contain names, email addresses, and message content; a collection endpoint exposed them publicly.

**How to apply:** Do not restore a public listing endpoint. If an admin view is needed, add authentication and authorization before returning submissions. The current in-memory rate limit is per application process, not shared across autoscale instances.
