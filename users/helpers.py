
def validate_form(data, required_fields, password_fields=None):
    errors = []

    for field in required_fields:
        if not data.get(field):
            errors.append(f'{field.capitalize()} is required')

    if password_fields:
        password = data.get(password_fields[0])
        confirm_password = data.get(password_fields[1])

        if password != confirm_password:
            errors.append('Passwords do not match')

    return errors
