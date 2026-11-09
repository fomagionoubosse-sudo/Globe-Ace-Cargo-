# Globe Ace Cargo — pet tracking website starter

## Upload to Netlify
1. Extract this ZIP on your computer. The extracted folder contains `index.html`, `style.css`, `app.js`, and this README.
2. In Netlify, choose **Add new project / Add new site → Deploy manually** (wording may vary).
3. Drag the extracted folder contents (or the folder, if Netlify accepts it) into the deploy area. Ensure `index.html` is at the published site root.
4. Netlify will create a public `*.netlify.app` preview URL. Test it on mobile and desktop.

## Included
- Public pet-agency landing page
- Tracking-code lookup
- Map display using Leaflet and OpenStreetMap tiles
- Sample tracking record `GAC-DEMO-001`
- Browser-only demo admin form for creating sample tracking records
- Contact / email / Smartsupp integration placeholders

## Important limitations — not production ready
This is a static front-end demonstration. It does NOT provide real live GPS tracking, shared customer records, real admin authentication, email delivery, real-time notifications, payment processing or actual refund handling. Demo records and refund forms are stored only in the browser's local storage. The map pin is illustrative and not a real shipment position. Never enter actual customer or payment details into this prototype.

## What is required for a real live map
- A driver/transport app or GPS device that explicitly shares the vehicle's current coordinates with permission.
- A secure backend API to receive and store location updates.
- A database connecting tracking IDs to shipments and authorised staff.
- A customer tracking API that returns only the correct shipment's authorised information.
- Authentication, role permissions, HTTPS, audit logs, rate limits and data retention controls.
- A clear customer privacy notice explaining what location is shared, with whom and for how long.

A tracking code alone cannot reveal a pet's location. Someone or something involved in the transport must send accurate location updates.

## Details from the supplied reference screenshot
The design includes placeholders for:
- Main website URL
- Admin login
- Business email / webmail
- Smartsupp live chat
- IMAP SSL port 993
- SMTP SSL port 465

The exact email hostnames and settings must be confirmed with the email provider. Set mail credentials as server-side environment variables; never put passwords in HTML or JavaScript. Credentials visible in the screenshot should be changed immediately, because they have been exposed in an image.

## Before launch
Connect a secure backend and database; configure a genuine admin login; verify shipment workflows; add the real support email, legal business details, privacy policy and transparent refund terms; integrate Smartsupp; and test all workflows. Do not claim live GPS tracking until location updates are genuinely connected.
