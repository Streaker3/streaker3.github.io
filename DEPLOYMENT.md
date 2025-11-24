# Deployment Guide - GitHub Pages

This guide will walk you through deploying your Next.js website to GitHub Pages at `https://streaker3.github.io`.

## Prerequisites

- A GitHub account (streaker3)
- Git installed on your computer
- Your website code ready to deploy

## Step 1: Prepare Your Existing Repository

Since you already have a repository at `streaker3.github.io` with some files you want to delete, you'll need to replace them with your new website.

### Option A: Replace Files via Git (Recommended)

1. **Clone your existing repository** (if not already cloned):
   ```bash
   cd /Users/felixgiering/Documents/Antigravity
   git clone https://github.com/streaker3/streaker3.github.io.git temp-backup
   ```

2. **Back up any files you want to keep** (optional):
   ```bash
   # Copy any files you want to save to a backup folder
   mkdir -p temp-backup/backup
   cp temp-backup/important-file.txt temp-backup/backup/
   ```

3. **Delete all files in the repository** (except .git):
   ```bash
   cd temp-backup
   # Remove all files except .git directory
   find . -not -path './.git/*' -not -name '.git' -delete
   ```

4. **Copy your new website files**:
   ```bash
   # Copy everything from your Website directory
   cp -r ../Website/* .
   cp -r ../Website/.* . 2>/dev/null || true
   ```

5. **Commit and push**:
   ```bash
   git add -A
1.  **Clone your existing repository** (if not already cloned):
    ```bash
    cd /Users/felixgiering/Documents/Antigravity
    git clone https://github.com/streaker3/streaker3.github.io.git temp-backup
    ```

2.  **Back up any files you want to keep** (optional):
    ```bash
    # Copy any files you want to save to a backup folder
    mkdir -p temp-backup/backup
    cp temp-backup/important-file.txt temp-backup/backup/
    ```

3.  **Delete all files in the repository** (except .git):
    ```bash
    cd temp-backup
    # Remove all files except .git directory
    find . -not -path './.git/*' -not -name '.git' -delete
    ```

4.  **Copy your new website files**:
    ```bash
    # Copy everything from your Website directory
    cp -r ../Website/* .
    cp -r ../Website/.* . 2>/dev/null || true
    ```

5.  **Commit and push**:
    ```bash
    git add -A
    git commit -m "Deploy new website"
    git push origin main
    ```

### Option B: Fresh Start (Delete and Re-upload)

If you want to start completely fresh:
1.  **Delete the repository** on GitHub (Settings → Danger Zone → Delete this repository)
2.  **Create a new repository** named `streaker3.github.io` (must be public)
3.  **Push your website** using the commands below

## Step 2: Push Your Code to GitHub

If you're using **Option B** or setting up from scratch:

Run these commands in your Website directory:

```bash
# Navigate to your Website directory
cd /Users/felixgiering/Documents/Antigravity/Website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Deploy new Antigravity website"

# Add your GitHub repository as remote
git remote add origin https://github.com/streaker3/streaker3.github.io.git

# Push to GitHub (this will replace everything in the repo)
git branch -M main
git push -f origin main
```

> [!WARNING]
> The `-f` flag will force push and replace all existing files in your repository.

## Step 3: Enable GitHub Pages

1. Go to [https://github.com/streaker3/streaker3.github.io](https://github.com/streaker3/streaker3.github.io)
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The page will refresh - you're all set!

## Step 4: Deploy Your Site

Your site will automatically deploy when you push to the `main` branch. The GitHub Action will:
1. Build your Next.js site as a static export
2. Deploy it to GitHub Pages

To check the deployment status:
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow running called "Deploy to GitHub Pages"
4. Wait for it to complete (usually 1-2 minutes)

## Step 5: Access Your Live Site

Once the deployment completes, your site will be available at:

**🌐 https://streaker3.github.io**

> [!TIP]
> It may take a few minutes for your site to be available after the first deployment.

## Making Updates

To update your site:
1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. The GitHub Action will automatically rebuild and redeploy your site

## Local Testing

Before deploying, you can test the static export locally:

```bash
# Build the static export
npm run build

# The output will be in the 'out' directory
# You can serve it locally with any static server, for example:
npx serve out
```

## Troubleshooting

### Build Fails on GitHub Actions

1. Check the **Actions** tab for error messages
2. Common issues:
   - Missing dependencies: Make sure `package-lock.json` is committed
   - Build errors: Test locally with `npm run build` first
   - Node version mismatch: The workflow uses Node 20

### Site Shows 404

1. Make sure GitHub Pages is enabled in Settings → Pages → Source: GitHub Actions
2. Check that the workflow completed successfully in the Actions tab
3. Wait a few minutes - initial deployments can take time
4. Verify the repository name is exactly `streaker3.github.io`

### Assets Not Loading

1. Check browser console for 404 errors
2. Verify all asset paths are relative, not absolute
3. Ensure images are in the `public` folder

### Images Not Displaying

1. Make sure images are in the `public` folder
2. Reference them with `/image.png` (not `./image.png`)
3. For project sites, Next.js will automatically add the base path

## Additional Resources

- [Next.js Static Exports Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Need Help?

If you encounter issues:
1. Check the GitHub Actions logs for specific error messages
2. Verify your `next.config.ts` configuration
3. Test the build locally with `npm run build`
4. Check that all dependencies are installed with `npm install`
