#!/usr/bin/ruby

unless File.directory?(ARGV[0])
	puts "Not a valid directory...\nCheck path and try again.\n\n"
	exit
end

Dir.open(ARGV[0]) do |adir|
	adir.each do |afile|
		next unless FileTest.symlink?(afile)
		next if File.file?(afile)
		puts "Bad link: #{File.expand_path(afile)}"
	end
end 