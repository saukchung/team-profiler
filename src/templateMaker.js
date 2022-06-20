const fs = require('fs');

const setupHtml = () => {
    const setupContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
<header>My Team</header>
<main>
`
    fs.writeFile("./dist/index.html", setupContent, function (err) {
        if (err) throw err;
    });
}

const finalizeHtml = () => {
    const finishContent = `</body>
</html>`
    fs.appendFile("./dist/index.html", finishContent, function (err) {
        if (err) throw err;
    });
}

finalizeHtml();
