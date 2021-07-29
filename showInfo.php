<!-- 
    Sebastian Snyder
    Homework 4
    IS 448
    The Form output page
-->
<!DOCTYPE html>

    <head>
        <title>Form Results</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css" title="style" />
    </head>

<?php
$uname = $_POST["name"];
$addr = $_POST["street"];
$city = $_POST["city"];
$state = $_POST["state"];
$email = $_POST["email"];
$phnum = $_POST["phone"];
?>

    <body>
        <h1>
        Thank you, <?php echo $uname ?>!  <br />
        Here are your results:
        </h1>

        <table>
            <tr>
                <td>Username:</td>
                <td><?php echo $uname ?></td>
            </tr>
            <tr>
                <td>Street Address:</td>
                <td><?php echo $addr ?></td>
            </tr>
            <tr>
                <td>City:</td>
                <td><?php echo $city ?></td>
            </tr>
            <tr>
                <td>State:</td>
                <td><?php echo $state ?></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><?php echo $email ?></td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td><?php echo $phnum ?></td>
            </tr>
        </table>

    </body>
</html>