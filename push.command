#!/bin/bash
cd "$(dirname "$0")"  # move to the directory of the .command file (your project)
echo "Enter commit message:"
read msg
git add .
git commit -m "$msg"
git push