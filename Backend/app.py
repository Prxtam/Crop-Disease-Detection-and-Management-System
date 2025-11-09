"""
Pharmacist locator endpoints removed/disabled.

This file previously contained Google Maps-based endpoints for finding nearby pharmacists.
Per the requested changes for a student-style project, the pharmacist locator feature has been
removed from the public API surface. The routes below now return a 410 (Gone) response with
an explanatory message.

If you later decide to restore the functionality, re-implement using a secure API key and
move the key out of source code into environment variables.
"""

from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/nearby-pharmacies', methods=['POST'])
def nearby_pharmacies_removed():
    return (jsonify({'error': 'Pharmacist locator feature has been removed.'}), 410)


@app.route('/top-pharmacists', methods=['GET'])
def top_pharmacists_removed():
    return (jsonify({'error': 'Pharmacist locator feature has been removed.'}), 410)


if __name__ == '__main__':
    # This module is retained for backwards-compatibility but endpoints are disabled.
    app.run(debug=True, port=5001)
