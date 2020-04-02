<!DOCTYPE html>
<html lang="pl">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="https://kit.fontawesome.com/8c62268f44.js" crossorigin="anonymous"></script>
	<link href="https://fonts.googleapis.com/css?family=Stint+Ultra+Condensed&display=swap&subset=latin-ext"
		rel="stylesheet">
	<link
		href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Playfair+Display:400,700&display=swap&subset=latin-ext"
		rel="stylesheet">
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<div class="wrapper">
		<header>Rafał Ochyra</header>
		<section class="mobile">
			<i class="fas fa-bars"></i>
			<nav class="burger">
				<ul>
					<li><a href="index.html">Strona główna</a></li>
					<li><a href="about.html">O mnie</a></li>
					<li><a href="projects.html">Projekty</a></li>
					<li><a href="contact.html">Kontakt</a></li>
				</ul>
			</nav>
		</section>
		<section class="desktop">
			<nav>
				<ul>
					<li><a href="index.html">Strona główna</a></li>
					<li><a href="about.html">O mnie</a></li>
					<li><a href="projects.html">Projekty</a></li>
					<li><a href="contact.html">Kontakt</a></li>
				</ul>
			</nav>
		</section>
		<div class="move">
			</div>
		<div class="scroll-up">
			<i class="fas fa-arrow-up"></i>
		</div>
	</div>
	<footer>
		<p>&copy; Rafał Ochyra 2020</p>
	</footer>
	<?php
			$to      = 'rafal.ochyra@gmail.com';
			$name    = $_POST['name'];
			$email   = $_POST['email'];
			$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
			$message = $_POST['message'];
			$headers = 'From: ' . $name . ' (' . $email . ')';
			// $headers .= 'Content-Type: text/html; charset=utf-8\r\n';

			mail($to, $subject, $message, $headers);

			echo '<h1 class=mailMessage>Wiadomość wysłana</h1>'
		?>
	<script src="main.js"></script>
</body>

</html>
