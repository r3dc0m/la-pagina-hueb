---
type: tasks
spaceId: changelog
year: 2026
---

## [NAV] Create view manager
id: task-1775181380280-928a52c5
status: done
priority: high
created: 2026-04-03
due: 2026-04-03

REQ: Needs to wrap navigation pages by groups. Design architecture is needed.
FIX: router.js -> manages navigation through pages.js.

## [CORE] Build API logic
id: task-1775181417500-6f638950
status: in-progress
priority: high
created: 2026-04-03
due: 

REQ: Ducks and/or sunlight. Perhaps weather.
ISSUES: requires CORS, allorigins proxy too slow.
WORKAROUND: using cats or dogs.

## [UI] Make animated buttons
id: task-1775181478763-437da222
status: review
priority: low
created: 2026-04-03
due: 2026-04-02

Changes size and color for buttons on mouse hover within CSS.

## [UI] Add feedback cards
id: task-1775181541770-603bff97
status: todo
priority: low
created: 2026-04-03
due: 

REQ: Aesthetics. Depends on styles and content load.

## [FEAT] Add content through file object
id: task-1775181604659-1ec47ea3
status: todo
priority: low
created: 2026-04-03
due: 

REQ: Dummy text fillers. Merge with SVG icons?

## [UI] Add assets
id: task-1775181670883-3d3248f9
status: done
priority: low
created: 2026-04-03
due: 2026-04-01

REQ: Profile images, background images, videos.
FIX: Delivered.

## [UTILS] build DOM with function & SVG filler.
id: task-1775185539734-e45a1856
status: done
priority: high
created: 2026-04-03
due: 2026-03-30

REQ: Basic utility to build DOM components.
FIX: utils.js -> build()

## [UI] Media query for mobile
id: task-1775187611004-cceae575
status: done
priority: low
created: 2026-04-03
due: 2026-04-03

REQ: Must include label display for navbar buttons on large screens.
FIX: styles.css media query hides button label based on class.

## [CORE] User login
id: task-1775187701352-becbd6c6
status: in-progress
priority: medium
created: 2026-04-03
due: 

REQ: Must include login & register. Depends on: modal, localStorage.
FIX: authService.js -> handles currentUser and localStorage store data.
router.js -> sends this to allow navigate within outter scripts.
pages.js -> creates innerHTML and links form to authService.js login/register functions.

## [NAV] Segment navbar
id: task-1775218243475-899e6a68
status: review
priority: medium
created: 2026-04-03
due: 2026-04-02

REQ: Move off navbar.
FIX: navBuilder.js -> builds nav buttons based on icons.js

## [NAV] Refactor creation logic
id: task-1775218385380-b86d0b17
status: done
priority: medium
created: 2026-04-03
due: 2026-04-03

REQ: Loop case for button creation. Perhaps adapt buttons per number of pages within class later on.
FIX: navBuilder builds 3 side arrays and depends on icons.js.

## [FEAT] <a href> for some random button
id: task-1775218474616-dbea7095
status: todo
priority: low
created: 2026-04-03
due: 

REQ: Anchor on target blank to random website.

## [UI] min-width to HTML
id: task-1775233916010-fa3b80a2
status: review
priority: low
created: 2026-04-03
due: 2026-04-02

REQ: Set to 140px to prevent shrink below this number even though there might not be any device that thin.
FIX: Delivered.
REVIEW: min-height needed?

## [NAV] Create Pages & Router class
id: task-1775234008686-3dc8b1d5
status: review
priority: high
created: 2026-04-03
due: 2026-04-02

REQ: Adding dummy pages and define navigation logic with Router class.
FIX: router.js -> includes async render on function navigate.

## [UI] Refactor auth form styles
id: task-1775297431958-4359161f
status: todo
priority: low
created: 2026-04-04
due: 

REQ: simplify & nest auth form animations

## [UI] Custom font
id: task-1775297584554-cb0c5ffa
status: done
priority: low
created: 2026-04-04
due: 2026-04-03

REQ: Added google custom fonts.
FIX: Delivered.

## [UI] Background media auto assign
id: task-1775344739965-5c3f0ec3
status: todo
priority: medium
created: 2026-04-04
due: 

REQ: define background media rules for each view programatically.

## [UI] Performance with background references
id: task-1775344809632-87d945f0
status: todo
priority: medium
created: 2026-04-04
due: 

REQ: check wether instancing graphics is more performant than creating tags with innerHTML.

## [UI] Prune unused media
id: task-1775344888033-7af0a7e4
status: todo
priority: low
created: 2026-04-04
due: 

REQ: remove unused media.

## [DOC] General documentation
id: task-1775344931356-3eef88cb
status: todo
priority: low
created: 2026-04-04
due: 

REQ: mermaid charts, scope, feature list.
