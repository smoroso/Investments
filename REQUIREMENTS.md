Instead of my excel sheet (https://docs.google.com/spreadsheets/d/1SVUb9Caya1Kespwz2xuBDbPuU7YiS6lAfrscmR5BlhE/edit?gid=1037349673#gid=1037349673), what about working on a web app I could upload somewhere
Features I want:
  - Git private repo
  - ReactJS or NextJS if needed
  - Keep data local using json files in a dedicated data/ folder
  - Manage account: Be able to login/logout as a user. 2 user accounts for now, one for me and one for mom, so we can save the pwd in a hidden .env file
  - Mobile first because mom will check on her phone. TailwindCSS and DaisyUI
  - Refresh data locally then deploy the freshened up web app onto Render or Railways
  - All kind of testing: unit (jest), integration, end to end (playwright)
  - API reading live prices would be amazing, via the API of Interactive broker for example -> cf. RESEARCH.md
  Note: Plan B is for me to have a UI where I can fill in the current prices or profit I read on the Interactive Broker page itself
  - Web app offering multi pages:
    - Home page with Wallet and summary
    - ETFs to see list of ETFs and be able to sort them out to find the best from criterias
    - Page explaining how to declare profits in France, written in French
    - Login/Logout feature via Navbar displaying a Modal
Process: I want to be able to manage a wallet per user, add money to it in EUR, use it to invest in things, mainly ETFs, at a precise time and then based on today's date know how much profit I made from the initial investment