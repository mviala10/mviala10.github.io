from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Lista de contadores
counters = []

@app.route('/')
def index():
    return render_template('index.html', counters=counters)

@app.route('/add_counter', methods=['POST'])
def add_counter():
    counter_name = request.form.get('counter_name')
    category_name = request.form.get('category_name')

    # Verifica si ya existe un contador con ese nombre
    if not any(counter['name'] == counter_name for counter in counters):
        counters.append({'name': counter_name, 'category': category_name, 'value': 0})

    return redirect(url_for('index'))

@app.route('/increment/<counter_name>')
def increment(counter_name):
    # Encuentra el contador por nombre y aumenta su valor
    for counter in counters:
        if counter['name'] == counter_name:
            counter['value'] += 1
            break

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
