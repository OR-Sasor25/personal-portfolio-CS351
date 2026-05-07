# Webdev portfolio

## What this is
A website portfolio page that will host:
    worker profile (Bio, contact information)
    resume
    projects

## Tech stack
- html
- css
- javascript/DOM
- json
## Architecture
- index.html
    - flex layout
        - nav bar buttons
            - bio
            - projects 
            - resume
            - contact
            -  nav bar position
                - left 
                - vertical
            - must be fixed to left side
        
        - bio section
        - projects section
            - implement light box for project screenshots
        - resume download button
        - enter email input box
- styles.css
    - three colors
        - red black white
    - body
        - background color white
    - buttons
        - bg color red
        - font color black
    - nav bar
        - red
    - font color 
        black
    - buttons hover
        - ease into:
            - font white
            - bg color black
    - must be able to scroll through all sections
- script.js

- emails.json
    - storage for parsed emails

## Input
- contact section
    - input box for email

## Output
- contact section
    - store entered emails in json file
- Resume section
    - button downloadable resume pdf

## What it should not do
- do not create more than 1 html file
- do not create more than 1 css file
- do not exede maximum css objects defined
    - maximum amount of css objects deffined to 10
- do not create more than 1 javascript file