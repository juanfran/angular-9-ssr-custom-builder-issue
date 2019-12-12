# Working SSR without @angular-builders/custom-webpack

```shell
git checkout 7e2818e44063b6c8f732b2dffd402d63a1a98a17
npm run build:ssr && npm run serve:ssr
```

Open http://localhost:4001/

# Broken SSR with @angular-builders/custom-webpack

```shell
git checkout master
npm run build:ssr && npm run serve:ssr
```

Open http://localhost:4001/ expected `Error: Can't resolve all parameters for ApplicationModule: (?).`

Diff https://github.com/juanfran/angular-9-ssr-custom-builder-issue/commit/20e12cdb42c94bbcead9cde91feb392bb7149825
