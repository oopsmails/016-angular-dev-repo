# angular-9-ngrx-store

See README.md of each project

## angular9-ngrx-store-basic: basic store concepts

## angular9-ngrx-store-blockchain: not really useful ...

## angular-ngrx-store-customer: store, CRUD, but just one page nav

## angular-simple: ONLY trying basic Angular concepts

## angular-ngrx-store-dev: will be a good project for everything ....

20210116: working on

## Setup Environment:

### Git:

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

git config --global credential.helper store

Then, 

git pull

The storage format is a .git-credentials file, stored in plaintext.

### install/update NodeJS

#### sudo apt purge nodejs npm

#### curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

##### if no "curl", then sudo apt install curl
if get "locked" error, then normally restarting will resolve it.

##### error Command 'nvm' not found, did you mean:

in that case you can run this command

`source ~/.nvm/nvm.sh`

OR you can put it in the file /.bashrc or ~/.profile to automatically load it

Here, put it in .profile



nvm install node

nvm install 10.16.3

v13.11.0

nvm ls
nvm use v13.11.0

nvm -v
node -v
npm -v

### Http and json-server

json-server is a file-based database that exposes a REST API based on the JSON schema. In the root of our project (/), create a db.json with the following content:

```
{
  "shopping": []
}

```

Then install json-server globally on your machine using npm or yarn:

`npm i json-server -g`

Finally, start your database and API by opening another terminal window and typing:

`json-server db.json`


## Setup Angular:

`npm install -g @angular/cli`


### ng add @ngrx/store-devtools to enable Redux extension in Chrome

`ng add @ngrx/store-devtools`


### ng generate service services/Shopping

### Using @Effect()

Install @ngrx effects by running the following in your terminal:

`npm install @ngrx/effects`

As always, you can use the Angular CLI to set this up automatically:

`ng add @ngrx/effects` <--- already with angular 9

## Problems and Issues:

### no provider for formbuilder angular 9:

```
@NgModule({
  imports: [
      BrowserModule /* or CommonModule */, 
      FormsModule,
      ReactiveFormsModule <--------------------------------------- need this ReactiveFormsModule
  ],
  ...
})
```

### Linux: angular system limit for number of file watchers reached

Linux uses the inotify package to observe filesystem events, individual files or directories.

`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -`p

### Angular: No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.

Make sure that index.html is a valid HTML file by adding the body element, in which you can insert the Angular root component




