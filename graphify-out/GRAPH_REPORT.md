# Graph Report - D:\www\01-client\portfolio-mahati  (2026-09-01)

## Corpus Check
- Corpus is ~1,723 words - fits in a single context window. You may not need a graph.

## Summary
- 33 nodes · 33 edges · 7 communities (5 shown, 2 thin omitted)
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.86)
- Token cost: 1,723 input · 900 output

## Community Hubs (Navigation)
- Hero Splash & Design System
- About & Social Feed
- Marketplace to Footer
- Interactions & Script
- Brand Guideline Hub
- Playful Brands
- Craft & Fashion Portfolio

## God Nodes (most connected - your core abstractions)
1. `Hero Splash Overlay` - 9 edges
2. `About Stefani Kreasisese` - 4 edges
3. `Brand Cara Beauty` - 4 edges
4. `go()` - 3 edges
5. `Portfolio Bloomé Skincare` - 3 edges
6. `Palette Pink E77B9A` - 3 edges
7. `Scroll Reveal Interaction` - 3 edges
8. `Hero Skip Button LIHAT PORTFOLIO` - 2 edges
9. `Divider HERE IS MY ARTWORK` - 2 edges
10. `Portfolio Mofu Bakery` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Hero Splash Overlay` --references--> `go()`  [INFERRED]
  index.html → script.js
- `go()` --references--> `About Stefani Kreasisese`  [INFERRED]
  script.js → index.html
- `io` --references--> `Scroll Reveal Interaction`  [INFERRED]
  script.js → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Social Media Portfolio Flow** — index_portfolio_bloome, index_portfolio_mofu, index_portfolio_luna, index_portfolio_kitty, index_portfolio_nara, index_portfolio_sunny [INFERRED 0.85]
- **Brand Guideline Palette System** — index_brand_cara_beauty, index_brand_olive_honey, index_brand_mimi_puff, index_brand_aura_studio, index_brand_peachy_daily, index_palette_pink, index_design_system [INFERRED 0.85]

## Communities (7 total, 2 thin omitted)

### Community 0 - "Hero Splash & Design System"
Cohesion: 0.29
Nodes (8): Design System Kawaii Girly, Hero Badge CREATIVE, Hero Splash Overlay, Hero Title PORTFOLIO, Splash Interaction Go, Navbar, Palette Pink E77B9A, Sticker Bunny SVG

### Community 1 - "About & Social Feed"
Cohesion: 0.29
Nodes (7): About Photo with Ribbon Sticker, About Stefani Kreasisese, Divider HERE IS MY ARTWORK, Hero Skip Button LIHAT PORTFOLIO, Portfolio Bloomé Skincare, Portfolio Luna Coffee, Portfolio Mofu Bakery

### Community 2 - "Marketplace to Footer"
Cohesion: 0.40
Nodes (5): Brand Peachy Daily, Footer LET IS WORK TOGETHER, Gallery Desain Lainnya, Marketplace Decoration, Pricelist Bloomé

### Community 3 - "Interactions & Script"
Cohesion: 0.40
Nodes (4): Scroll Reveal Interaction, go(), io, y

### Community 4 - "Brand Guideline Hub"
Cohesion: 0.50
Nodes (4): Brand Cara Beauty, Logo Brand Guideline Section, Brand Olive and Honey, Portfolio Sunny Kids

## Knowledge Gaps
- **16 isolated node(s):** `y`, `Navbar`, `Hero Badge CREATIVE`, `Hero Title PORTFOLIO`, `Sticker Bunny SVG` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Hero Splash Overlay` connect `Hero Splash & Design System` to `About & Social Feed`, `Interactions & Script`?**
  _High betweenness centrality (0.262) - this node is a cross-community bridge._
- **Why does `Brand Cara Beauty` connect `Brand Guideline Hub` to `Hero Splash & Design System`, `Interactions & Script`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **Why does `Palette Pink E77B9A` connect `Hero Splash & Design System` to `Brand Guideline Hub`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Hero Splash Overlay` (e.g. with `Design System Kawaii Girly` and `go()`) actually correct?**
  _`Hero Splash Overlay` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `About Stefani Kreasisese` (e.g. with `Hero Skip Button LIHAT PORTFOLIO` and `go()`) actually correct?**
  _`About Stefani Kreasisese` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Brand Cara Beauty` (e.g. with `Brand Olive and Honey` and `Scroll Reveal Interaction`) actually correct?**
  _`Brand Cara Beauty` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `go()` (e.g. with `Hero Splash Overlay` and `About Stefani Kreasisese`) actually correct?**
  _`go()` has 2 INFERRED edges - model-reasoned connections that need verification._