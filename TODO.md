# TODO & Issues List

This document tracks pending tasks, known issues, and features that need attention for the D&D Campaign Codex project.

## 🚨 CRITICAL ISSUES

### 1. lansing_guild_complete.html - EMPTY FILE
**Priority: HIGH**
- **Issue:** The booking form file `lansing_guild_complete.html` is completely empty (0 bytes)
- **Impact:** Booking functionality is broken
- **Action Required:** 
  - Restore content from backup if available
  - OR rebuild booking form with medieval theme and validation
  - Form should include: name, email, date/time selection, session type, notes
  - Must include proper HTML structure with medieval CSS styling
- **Status:** ⚠️ NEEDS IMMEDIATE ATTENTION

### 2. Inventory System - Data Not Loading
**Priority: MEDIUM**
- **Issue:** `inventory.md` shows "Loading inventory..." message
- **Root Cause:** Missing or empty inventory data source
- **Files to Check:**
  - `/assets/js/inventory.js` - verify this file exists and has proper logic
  - `/assets/json/` folder - check if inventory data file exists
  - Google Sheets integration (if using external data source)
- **Action Required:**
  - Create sample inventory data file if missing
  - Fix JavaScript loading logic
  - Add error handling for failed data loads
- **Status:** ⚠️ NEEDS INVESTIGATION

## 📝 NAVIGATION UPDATES (COMPLETED)

### ✅ Header Navigation Fixed
- **Completed:** Updated `_includes/header.html` with correct .html extensions
- **Changes Made:**
  - `/characters` → `/characters.html`
  - `/map` → `/map.html`
  - `/inventory` → `/inventory.html`
  - Added `/lore.html` link
  - Added `/player_info.html` link
- **Commit:** fix(nav): Update navigation links to use .html extensions

### ✅ README Navigation Verified
- **Status:** README.md already has correct `/player_info.html` reference in navigation table

## 🔧 PLACEHOLDER FEATURES TO IMPLEMENT

### Coaching Portal Features
**Location:** Referenced in README.md
- **📚 Resources Page** - Status: "Coming soon"
  - Create `/resources.md` or `/resources.html`
  - Add guides and materials for coaching clients
  - Link to downloadable resources
  
- **📊 Progress Tracking** - Status: "Coming soon"
  - Create `/progress.md` or `/progress.html`
  - Implement progress tracking dashboard
  - Consider integration with external tracking tools

### D&D Campaign Features
**Potential Enhancements:**
- **Session Logs:** Expand `_posts/` directory with more session summaries
- **NPC Database:** Create dedicated section for important NPCs
- **Quest Tracker:** Add active/completed quests tracking
- **Combat Tracker:** Consider adding initiative/HP tracking tool for DM

## 🗄️ ASSETS CLEANUP NEEDED

### Files to Review for Unused Assets
**Action:** Scan the following directories for unreferenced files

#### `/assets/css/`
- Review all CSS files
- Check which are referenced in layouts/includes
- Identify duplicates or outdated styles
- **TODO:** Create comprehensive list of CSS files and their usage

#### `/assets/images/`
- Check for unused images
- Optimize large image files
- Remove test/dummy images
- **TODO:** Audit all images and create removal list

#### `/assets/js/`
- Verify all JavaScript files are loaded
- Check for deprecated/unused scripts
- Minify production JS files
- **TODO:** Document each JS file's purpose

#### `/assets/icons/`
- Review icon usage across site
- Remove unused icon files
- Consider icon sprite/font for optimization
- **TODO:** Map icons to their usage locations

#### `/assets/maps/`
- Verify map files are properly referenced
- Check file sizes for optimization opportunities
- **TODO:** Document map files and their purposes

#### `/assets/json/`
- Check for orphaned JSON data files
- Verify inventory/character data structure
- **TODO:** Document JSON data schema

### Cleanup Recommendations
**Process:**
1. Create comprehensive file inventory
2. Cross-reference with codebase usage
3. Create backup before deletion
4. Move unused files to `/assets/_unused/` for review
5. Delete confirmed unused files after 30-day review period

## 🐛 KNOWN BUGS

### Layout/Theme Issues
- **TODO:** Test all pages render correctly with new navigation
- **TODO:** Verify mobile responsiveness on all pages
- **TODO:** Check dark mode compatibility

### Link Verification
- **TODO:** Test all internal links after navigation update
- **TODO:** Verify external links still work
- **TODO:** Check that Jekyll builds without warnings

## 📋 CODE QUALITY IMPROVEMENTS

### Documentation
- **TODO:** Add inline comments to complex JavaScript
- **TODO:** Document Liquid template variables
- **TODO:** Create style guide for contributors

### Consistency
- **TODO:** Ensure all markdown files use consistent front matter
- **TODO:** Standardize file naming conventions
- **TODO:** Unify CSS class naming (BEM methodology?)

### Performance
- **TODO:** Audit page load times
- **TODO:** Implement lazy loading for images
- **TODO:** Minify CSS/JS for production
- **TODO:** Enable caching headers

## 🔮 FUTURE ENHANCEMENTS

### Features to Consider
1. **Search Functionality:** Add site-wide search
2. **Dark Mode Toggle:** User-selectable theme
3. **PDF Export:** Generate PDF character sheets
4. **Calendar Integration:** Sync session schedule with Google Calendar
5. **Mobile App:** Progressive Web App (PWA) version
6. **API Integration:** D&D Beyond character import

### Content Expansion
1. **Homebrew Content:** Section for custom rules/items
2. **Session Gallery:** Photo gallery from sessions
3. **Recap Videos:** Embed session recap videos
4. **Player Testimonials:** Quotes/reviews from players

## 📞 CONTACT INFORMATION PLACEHOLDERS

**In README.md - Need to update:**
- `[Your coaching email]` - Replace with actual email
- `[Your phone number]` - Replace with actual phone or remove

## 🚀 DEPLOYMENT CHECKS

### Pre-Deployment Checklist
- [ ] All navigation links tested
- [ ] No 404 errors on internal links
- [ ] Forms working correctly
- [ ] Mobile responsive on all pages
- [ ] Browser compatibility tested (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit passed
- [ ] SEO metadata complete
- [ ] robots.txt configured
- [ ] sitemap.xml generated

### GitHub Pages Status
- **Current Status:** Deployed
- **Last Build:** Check deployments tab
- **TODO:** Set up build status monitoring
- **TODO:** Configure custom domain (if needed)

## 📊 MAINTENANCE SCHEDULE

### Weekly
- Review and close completed TODOs
- Check for broken external links
- Monitor site performance

### Monthly
- Audit unused assets
- Review and update content
- Check dependency updates
- Backup repository

### Quarterly
- Major feature additions
- Theme/design refresh
- Security audit
- Performance optimization

---

**Last Updated:** October 4, 2025
**Next Review:** October 11, 2025

**Note:** This file should be updated as tasks are completed or new issues are discovered. Mark completed items with ✅ and add dates.
