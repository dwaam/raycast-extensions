#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Weekend
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 👋🏻
# @raycast.needsConfirmation true

# Documentation:
# @raycast.description Close work applications
# @raycast.author dwaam

tell application "Workplace Chat" to if it is running then quit
tell application "BIG-IP Edge Client" to if it is running then quit
tell application "DataGrip" to if it is running then quit
tell application "WebStorm" to if it is running then quit
tell application "Sublime Text" to if it is running then quit
tell application "iTerm" to if it is running then quit
