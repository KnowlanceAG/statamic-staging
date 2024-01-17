# Notes
This is Statamic v4.

### Current Requirements
PHP v8.2

### Including CPSSG addon: an adjusted SSG plugin

[CPSSG](https://gitlab.uscreen.net/uscreen/statamic-addons/cpssg) is a plugin designed to create static html pages and assets (js, css). As the static result has no backend to handle data from contact forms, the plugin creates several routes to contact the dynamic backend.
### SSG Static Site Generation

The CPSSG addon is capable of generating files for different vhosts.
Responsive image file variants are going to be spared from being generated with every ssg run. They will permanently reside outside of the deployment folder and copied into it just in time.

v2.50.1
.