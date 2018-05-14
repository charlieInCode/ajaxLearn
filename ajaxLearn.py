from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('Sample_1.html')

@app.route('/api/categories')
def get():
    t = {
        'a': 1,
        'b': 2,
        'c': [3, 4, 5]
        }
    return jsonify(t)


if __name__ == '__main__':
    app.debug = True
    app.run()
