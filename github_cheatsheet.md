# Professional GitHub Workflow Cheatsheet

## 1. Clone Repository // to have in local repo
```
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

## 2. Create a Branch // review before merging changes into the main branch. This helps prevent conflicts and keeps the main branch stable.
```
git checkout -b feature/your-feature-name
```

## 3. Make Changes // to review the changes before staging and commit
- Edit/add files as needed.
- Check status:
```
git status
```

## 4. Stage and Commit
```
git add .
git commit -m "Clear, meaningful commit message"
```

## 5. Sync with Remote
```
git pull origin main  # or master or your base branch
```

## 6. Push Your Branch
```
git push origin feature/your-feature-name
```

## 7. Create a Pull Request (PR)
Step-by-step:
1. Go to your repository on GitHub.
2. Click the "Compare & pull request" button (or "New pull request").
3. Make sure the base branch is `main` (or `master`) and the compare branch is your feature branch.
4. Add a title and description for your PR.
5. Click "Create pull request".
6. Request reviews from teammates if needed.
7. Discuss and make changes as needed (push more commits to your branch if required).

## 8. Merge and Clean Up
Step-by-step:
1. Once your PR is approved, click the "Merge pull request" button on GitHub (choose "Squash and merge" for a clean history if available).
2. Delete the feature branch on GitHub (there will be a button after merging).
3. Delete the feature branch locally:
   ```
   git branch -d feature/your-feature-name
   ```

## 9. Keep Local Repo Updated
```
git checkout main
git pull origin main
```

## 10. Best Practices
- Commit often, but with purpose.
- Write clear commit messages.
- Use .gitignore to avoid committing unnecessary files.
- Review code before merging.
- Use issues and PRs for tracking work and discussion.

## How to Create a .gitignore File
1. In your project folder, create a new file named `.gitignore` (no filename, just the extension).
2. Open it and add patterns for files/folders you want Git to ignore. For example:
   ```
   node_modules/
   .env
   *.log
   dist/
   ```
3. Save the file.

Git will now ignore any files or folders matching those patterns. You can create and edit `.gitignore` using any text editor.

## How to Undo a Mistaken Merge to Master/Main

1. **Find the previous commit hash:**
   ```
   git log
   ```
   (Look for the commit just before the merge.)

2. **If you have NOT pushed yet:**
   ```
   git reset --hard <previous-commit-hash>
   ```
   (This will move your branch back to the previous commit and discard the merge.)

3. **If you have already pushed:**
   - To safely undo the merge and keep history:
   ```
   git revert -m 1 <merge-commit-hash>
   ```
   (This creates a new commit that undoes the merge.)

**Tip:** Always double-check before resetting or reverting, especially if working with a team.
