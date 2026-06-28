# Security Policy

Thank you for helping keep **Sansu UI** and its community safe.

We take security seriously and appreciate the efforts of security researchers and contributors who responsibly disclose vulnerabilities.

---

# Supported Versions

The following table shows which versions currently receive security updates.

| Version | Supported |
| ------- | :-------: |
| 0.1.x   |     ✅     |
| < 0.1.0 |     ❌     |

As the project evolves, only the latest stable release (and selected maintenance releases) will receive security updates.

---

# Reporting a Vulnerability

If you believe you have discovered a security vulnerability in Sansu UI, **please do not create a public GitHub Issue**.

Instead, report the issue privately so it can be investigated and resolved before public disclosure.

## Preferred Reporting Method

Please open a **GitHub Security Advisory** if available.

If Security Advisories are not enabled, contact the maintainer directly.

Project Maintainer:

**Sanskar Amle**

GitHub:

https://github.com/sanskar-commits

---

# What to Include

When reporting a vulnerability, please include as much information as possible.

Recommended information includes:

* Description of the vulnerability
* Steps to reproduce
* Affected package(s)
* Affected version(s)
* Potential impact
* Proof of concept (if available)
* Suggested fix (optional)

Providing complete information helps us investigate and resolve issues more quickly.

---

# Response Timeline

Our goal is to respond according to the following timeline.

| Stage             | Target Time                    |
| ----------------- | ------------------------------ |
| Initial response  | Within 7 days                  |
| Status update     | As investigation progresses    |
| Security fix      | As soon as reasonably possible |
| Public disclosure | After a fix is available       |

Please note that response times may vary depending on the complexity of the issue and contributor availability.

---

# Responsible Disclosure

We kindly ask that you:

* Do not publicly disclose vulnerabilities before a fix is available.
* Allow reasonable time for investigation and remediation.
* Avoid accessing or modifying data that does not belong to you.
* Avoid actions that could negatively affect users of the project.

Responsible disclosure helps protect the community while allowing time to prepare a fix.

---

# Scope

This policy applies to:

* The `@sansu-ui/react` package
* Official GitHub repositories for Sansu UI
* Future official Sansu UI packages

Examples include:

* React components
* Design tokens
* Build tooling
* Documentation website
* Playground application

---

# Out of Scope

The following are generally considered out of scope:

* Issues in third-party dependencies (please report them to the appropriate project)
* Social engineering attacks
* Denial-of-service testing against public infrastructure
* Vulnerabilities requiring physical access to a user's device
* Reports without sufficient information to reproduce the issue

---

# Security Best Practices

If you use Sansu UI in production, we recommend:

* Keeping dependencies up to date.
* Using supported versions of React.
* Regularly updating to the latest Sansu UI release.
* Reviewing dependency advisories using tools such as `npm audit`.

Example:

```bash
npm audit
```

or

```bash
pnpm audit
```

---

# Disclosure Policy

Once a vulnerability has been:

* Verified
* Fixed
* Released

we may publish a security advisory describing:

* The issue
* Affected versions
* Fixed versions
* Mitigation steps
* Credits (with permission)

---

# Credits

We appreciate responsible security researchers who help improve the safety of Sansu UI.

With your permission, verified reports may be acknowledged in future release notes or security advisories.

---

# Questions

If you are unsure whether something is a security issue, feel free to contact the project maintainer before creating a public issue.

---

Thank you for helping keep **Sansu UI** secure for everyone.

❤️ The Sansu UI Team
