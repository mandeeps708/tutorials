unless ARGV[0]
	puts "\n\n\nYou need to specify a filename: massEdit.rb <filename>\n\n\n"
	exit
end

name = ARGV[0]
x=0

Dir['*.[Jj][Pp]*[Gg]'].each do |pic|
	new_name = "#{name}_#{"%.2d" % x+=1}#{File.extname(pic)}"
	puts "Remaining #{pic} ---> #{new_name}"
	File.rename(pic, new_name)
end

