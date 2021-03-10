# Statamic ControlPanel Addon for SSG

Adds a new menu section for running the generation process of the SSG addon (https://github.com/statamic/ssg).


## Add as Git Submodule

Add the extension in the Statamic root directory.

```
$ git submodule add git@gitlab.uscreen.net:uscreen/statamic-addons/cpssg.git ./addons/uscreen/cpssg
```

## Edit composer.json

Add the extension to the composer.json

```
...
    "require": {
      ...
        "uscreen/link-extended": "dev-master"
    },
...
    "repositories": [
        {
            "type": "path",
            "url": "addons/uscreen/cpssg"
        }
    ]
...
```


## Composer update

```
$ php composer update
```
