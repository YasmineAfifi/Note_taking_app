import flask
app = flask.Flask("note_app")

# function get all html pages
def get_html(page_name):
    open_html = open(page_name+".html")
    content = open_html.read()
    open_html.close()
    return content
# index page for enter userName
@app.route("/")
def indexPage():
    return get_html("index")


# 
@app.route("/home")
def home_page():
    home_content = get_html("home")
    return home_content

@app.route("/addNote")
def add_note():
    if(flask.request.args.get("noteDescription")!=""):
        open_file = open("note.txt","a")
        note_details = flask.request.args.get("noteDescription")
        open_file.write(note_details +"\n")
        open_file.close()
    else:
        return "No Note Added"
    