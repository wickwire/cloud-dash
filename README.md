First Commit

AngularJS + Yeoman + Clean Project

====== @Cloud9 ======

- after importing the github repo, globally install the following packages:
npm install -g yo grunt-cli bower generator-angular

- to run the app:
grunt server
on the browser, open -> https://<project>-c9-<cloud9_account>.c9.io
the following static content will appear:

'Allo, 'Allo!

You now have

    HTML5 Boilerplate
    AngularJS
    Karma

installed.
Enjoy coding! - Yeoman

====== @Cloud9 ======


====== @Localhost ======

clone the github repository:
git clone https://github.com/wickwire/cloud-dash.git

push git updates to your github account (if you have it)
git commit -a -m <message between double quotes>
git push

update your local git cloned repository:
git pull



Running the example locally:

Gruntfile.js may need updating:

    connect: {
      options: {
        port: process.env.PORT, //change this to a valid port i.e. 9000
        hostname: process.env.IP, //change this to 'localhost'
        livereload: process.env.LIVERELOAD_PORT //change this to a valid port i.e. 35729
      },

      (...)

====== @Localhost ======


- to start coding on the example and learn yeoman/angularjs code conventions:
http://www.youtube.com/watch?feature=player_detailpage&v=ec99SDwSyeI#t=3643

(from minute 60 onwards)
