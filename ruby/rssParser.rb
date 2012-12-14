require 'rss/1.0'
require 'rss/2.0'
require 'open-uri'

source = "http://nostarch.com/blog/?feed=rss2" # change this location to the appropriate rss feed
content = ""

open(source) do |info|
	content = info.read
end

rss = RSS::Parser.parse(content, false)

print "Do you want to see feed descriptions (y/n)? "
input = gets.chomp

desc = input == 'y' || input == 'Y'

puts "\n\nTitle: #{rss.channel.title}"
puts "DESCRIPTION: #{rss.channel.description}"
puts "LINK: #{rss.channel.link}"
puts "PUBLICATION DATE: #{rss.channel.date} \n\n"


rss.items.size.times do |i|
	puts "#{rss.items[i].date} ... #{rss.items[i].title}"
	if desc
		print "#{rss.items[i].description}\n\n\n"
	end
end