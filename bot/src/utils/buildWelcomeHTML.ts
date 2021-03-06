export default (member: any): string => {
  const username = member.user.username.substring(0, 24); // max 24 characters

  const body: string = `<body>
    <div class="overlay"></div>
    <img src="https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}" alt="user-avatar" class="user-avatar"/>
    <div class="welcome-container">
        <img src="https://i.imgur.com/c4rIyMf.png" alt="logo" class="logo">
        <div class="container">
          <h5 class="subtitle">WELCOME TO MIASTUDIOS!</h5>
        <h1 class="title">${username}</h1>
        </div>
    </div>
  </body>`;

  let fontSize: number = 72;
  const usernameLength: number = username.length; // maximum 24 characters

  if (usernameLength < 6) fontSize = 72;
  else if (usernameLength >= 6 && usernameLength < 8) fontSize = 54;
  else if (usernameLength >= 8 && usernameLength < 9) fontSize = 48;
  else if (usernameLength >= 9 && usernameLength < 11) fontSize = 40;
  else if (usernameLength >= 11 && usernameLength < 13) fontSize = 34;
  else fontSize = 32;

  return `
  <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;800&display=swap');
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                overflow: hidden;
              }

              body {
                width: 1000px;
                max-width: 1000px;
                font-family: "Poppins", Arial, Helvetica, sans-serif;
                color: #ffffff;
                overflow: hidden;
              }
              
              .welcome-container {
                width: 1000px;
                min-width: 1000px;
                max-width: 1000px;
                height: 300px;
                min-height: 300px;
                max-height: 300px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 50px 130px;
                z-index: 300;
              }

              .welcome-container * {
                z-index: 300;
              }
              
              .user-avatar {
                height: 300px;
                width: auto;
                box-sizing: contain;
                position: absolute;
                z-index: 3;
              }

              .overlay {
                width: 1000px;
                min-width: 1000px;
                max-width: 1000px;
                height: 300px;
                min-height: 300px;
                max-height: 300px;
                background: linear-gradient(90deg, rgba(11, 11, 11, 0.25) 0px, rgba(11, 11, 11, 1) 290px);
                top: 0;
                left: 0;
                position: absolute;
                z-index: 30;
              }

              .logo {
                max-height: 200px;
                min-height: 200px;
                height: 200px;
                min-width: 200px;
                max-width: 200px;
                width: 200px;
                box-sizing: contain;
                margin-right: 40px;
              }
              
              .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                border-right: 2px solid #fff;
                width: 100%;
              }
              .subtitle {
                font-size: 26px;
                line-height: 26px;
                font-weight: 300;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.75);
              }
              .title {
                font-size: ${fontSize}px;
                line-height: 72px;
                font-weight: 800;
                max-width: 450px;
                overflow: hidden;
                text-overflow: ellipsis;
                text-transform: uppercase;
                white-space: nowrap;
              }


            </style>
        </head>
        ${body}
    </html>`;
};
