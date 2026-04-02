# Interactive Numeric Visualization App

## Overview
An interactive application that allows users to input numeric sequences through multiple input boxes and display them with clear functionality.

## Core Features

### Input Interface Layout
- **Top Section**: 5 input boxes arranged vertically at the top of the screen:
  - First row: 1 input box accepting 8-digit numbers (pre-filled with "00000000")
  - Second row: 1 input box accepting 4-digit numbers (pre-filled with "0000") 
  - Third row: 1 input box accepting 8-digit numbers (pre-filled with "00000000")
  - Fourth row: 1 input box accepting 5-digit numbers (pre-filled with "00000")
  - Fifth row: 1 input box accepting 5-digit numbers (pre-filled with "00000")
  - All top input boxes centered horizontally with vertical spacing between rows

- **Bottom Section**: 11 input boxes arranged in two centered rows:
  - First row: 7 input boxes in a single centered row
  - Second row: 4 input boxes centered below the first row with vertical spacing
- Each bottom input box accepts 5-digit numbers
- Each bottom input box is pre-filled with "00000" by default when the app loads
- "DISPLAY" button centered below all bottom input boxes
- Bottom input boxes positioned near the bottom of the screen

### Display System
- When "DISPLAY" button is pressed, digits from ALL input boxes appear in the visualization area
- Display area positioned in the center-middle of the screen, between top and bottom input sections
- Display area height increased to ensure all digit lines are fully visible, including both the top input data display and the bottom 4 lines of numbers
- Display shows digits from all input boxes:
  - Top section digits displayed above the existing two-line format
  - Existing format: First line with 7 groups of 5 digits, second line with 4 groups of 5 digits
- All displayed digits maintain proper spacing and alignment
- All content uses centered layout with consistent spacing
- Visualization area remains centered horizontally and vertically relative to the rest of the layout, but tall enough to display all content without cutting off any digits
- Visualization box is wide enough to ensure all digits are fully visible without being cut off
- Spacing between top and bottom visualized lines remains visually balanced after resizing

### Clear Functionality
- "CLEAR" button positioned immediately below the visualization area with proper spacing
- When pressed, removes all digits currently displayed in the visualization area
- After clearing, user can press DISPLAY button again to regenerate the digits from all input boxes
- Input box values remain unchanged when clearing the display
- CLEAR button styled identically to DISPLAY button: blue background, white text, matching size and typography

### Visual Design
- Large, readable font for digit display in the visualization area
- Clean, minimalist design focused on digit visualization
- All digits appear in normal black text
- Both DISPLAY and CLEAR buttons have consistent blue background, white text styling
- Clean, centered alignment maintained throughout the layout
- Top and bottom input sections follow identical styling rules (font, input styling, spacing)

## Data Storage
No backend data persistence required - all state maintained in frontend only.

## User Interface
- Clean, minimalist design focused on digit visualization
- Top input section positioned at top of screen with vertical spacing between rows
- Numeric visualization area centered in middle of screen with increased height for full visibility of all digit lines
- CLEAR button positioned immediately below visualization area with proper spacing
- Bottom input interface positioned near bottom of screen
- Responsive layout for different screen sizes
- Consistent spacing and alignment between all input boxes and displayed digits
- Matching button styles for DISPLAY and CLEAR buttons
- Consistent styling between top and bottom input sections
- App content language: English
