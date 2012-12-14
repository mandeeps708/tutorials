require 'cgi'

cgi = CGI.new("html4Tr")

print "Enter Form Page Title: "
title = gets.chomp
print "Enter Head Title: "
input_title = gets.chomp
print "Enter value for button: "
value = gets.chomp
print "Enter group: "
group = gets.chomp

$stdout = File.new("form.html", "w")
cgi.out{
	CGI.pretty(
		cgi.html{
					cgi.head{ "\n"+cgi.title{title}}+
				cgi.body{"\n" +
					cgi.form{"\n" +
					cgi.hr +
					cgi.h1 { "#{input_title}:" } + "\n" +
					cgi.br +
					cgi.checkbox(group, value) + value + cgi.br
					cgi.br +
					cgi.textarea("input",80,5) + "\n" +
					cgi.br +
					cgi.submit("Send")
					}
				}
		}
	)
}

$stdout.close