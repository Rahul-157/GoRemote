nohup ngrok tcp 22 &
sleep 3
url=`curl -s  --location --request GET 'localhost:4040/api/tunnels' | jq .tunnels[0].public_url`
echo $url
curl --location --request POST 'https://go-remote-ssh.herokuapp.com/post2' --header "address: $url"
echo ""
while [ "$url" != "" ]
do
	url=`curl -s  --location --request GET 'localhost:4040/api/tunnels' | jq .tunnels[0].public_url`
	echo $url
	sleep 4
done
echo "Service stopped, check ngrok"