#!/bin/sh
echo "Commiting to Github"
read -p 'Enter a commit message: ' commit_message
git add .
git commit -m "$commit_message"
git push
echo "Deploying to mywb.vcs.net"
echo "Deployment complete"
ssh supadmin@mywb.vcs.net 'cd Airpods-DiscordBot/; git pull'
echo "Restarting bot"