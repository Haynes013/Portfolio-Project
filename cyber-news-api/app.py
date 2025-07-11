from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/news')
def get_news():
    url = "https://thehackernews.com"
    res = requests.get(url)
    soup = BeautifulSoup(res.text, "html.parser")

    articles = []
    for item in soup.select(".body-post"):
        title = item.select_one(".home-title").text.strip()
        link = item.select_one("a")["href"]
        summary = item.select_one(".home-desc").text.strip()

        articles.append({
            "title": title,
            "link": link,
            "summary": summary
        })

    return jsonify(articles)

if __name__ == '__main__':
    app.run(debug=True)
