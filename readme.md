# End points

Note: This API is not configurable right now. It fetches data for the user 'tmtanzeel' and repo 'socialcoder' only because the user and repo are hard coded.

## Get user information
>https://github-api-nodejs.herokuapp.com/api/github/userinfo/{username}

### Usage
>https://github-api-nodejs.herokuapp.com/api/github/userinfo/tmtanzeel


## Get repo information
>https://github-api-nodejs.herokuapp.com/api/github/repoinfo/{username}/{reponame}
### Usage
>https://github-api-nodejs.herokuapp.com/api/github/repoinfo/tmtanzeel/my-portfolio

## Get commit information
>https://github-api-nodejs.herokuapp.com/api/github/commitinfo/{username}/{reponame}
### Usage
>https://github-api-nodejs.herokuapp.com/api/github/userinfo/tmtanzeel/my-portfolio

Note: Internally I'm adding '/commits' to the end of the above URL (end point) 






