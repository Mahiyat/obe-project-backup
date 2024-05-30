# Base image
FROM python:3.10.12

# Set the working directory
WORKDIR /app

# Copy the server code
COPY . /app

# Create a virtual environment and activate it
RUN python -m venv myenv
RUN /bin/bash -c "source myenv/bin/activate"

# Install dependencies
RUN pip install django django-cors-headers djangorestframework

# Expose the port
EXPOSE 8000

# Run the server
# WORKDIR /app/obeserver
# CMD /bin/bash -c "source myenv/bin/activate && python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"
