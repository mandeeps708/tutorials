require 'uri'
require 'open-uri'
require 'rubyful_soup'

begin
	print "\n\nEnter website to crawl (ex. http://www.google.com): "
	url = gets
	puts url
	uri = URI.parse(url)
html = open(uri).read
rescue Exception => e 
	print "Unable to connect to url:"
	puts "Error --- #{e}"

end

soup = BeautifulSoup.new(html)



links = soup.find_all('a').map { |a| a['href'] }

links.delete_if { |href| href=~ /javascript|mailto/ }

links.each do |1|
	if 1
		begin
			link = URI.parse(1)
			link.scheme ||= 'http'
			link.host ||= 'uri.host'
			link.path = uri.path + link.path unless link.path[0] == //
			link = URI.parse(link.to_s)

			open(link).read
		rescue Exception => e 
			puts "#{link} failed because #{e}"
		end
	end
end
